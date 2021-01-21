const { forwardTo } = require('prisma-binding')
const { getUser, getUserRightsInGroup } = require('../../utils');

async function createGroup (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx);
  const group = await ctx.prisma.mutation.createGroup(
      {
          data: {
            owner:{
              connect:{
                id: requesterUser.id
              } 
            },
            name: args.data.name,
            users: args.data.users

          }
      }
  )

  return {
    id:group.id
  }
}

async function addUsersToGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const user = await getUser(ctx);
  let userId = user.id;
  let rights = await getUserRightsInGroup(ctx, userId, args.idGroup);

  if(rights.includes("1") || rights.includes("owner")){
    args.users.forEach(async function(item){
      await ctx.prisma.mutation.updateGroup(
        {
            data:{
              users:{
                connect:{
                  id: item.id
                } 
              }
  
            },
            where:{
              id: args.idGroup
            }
        }
      )
    });
    
    
    return {
      id: args.idGroup
    }
  }
  throw new Error("You are not able to add an user in this group")
  
}

async function removeUsersToGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const user = await getUser(ctx);
  let userId = user.id;
  let rights = await getUserRightsInGroup(ctx, userId, args.idGroup);

  // 2 = right able to delete a user from group
  if(rights.includes("2") || rights.includes("owner")){
    args.users.forEach(async function(item){
      await ctx.prisma.mutation.updateGroup(
        {
            data:{
              users:{
                disconnect:{
                  id: item.id
                } 
              }
  
            },
            where:{
              id: args.idGroup
            }
        }
      )
    });
    
    
    return {
      id: args.idGroup
    }
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
  
}

async function updateGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const requesterUser = await getUser(ctx);
  const groupToUpdate = await ctx.prisma.query.group({where:{...args.where}}, "{ id owner{id} }")

  if(groupToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === groupToUpdate.owner.id){
    return forwardTo('prisma')(parent, args, ctx, info)
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
  
}

async function deleteGroup (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx);
  const groupToUpdate = await ctx.prisma.query.group({where:{...args.where}}, "{ id owner{id} }")
  if(groupToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === groupToUpdate.owner.id){
    return forwardTo('prisma')(parent, args, ctx, info);
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
}

async function addRoleToUser(_, args, ctx, info){
  let user = await getUser(ctx);
  let userId = user.id;
  let rights = await getUserRightsInGroup(ctx, userId, args.groupId);

  // 6 = right able to add a role to an user
  if(rights.includes("6") || rights.includes("owner")){
    const groupToUpdate = await ctx.prisma.query.group({where:{id: args.groupId}}, '{ id users{id} }')

    if(groupToUpdate === null){
      throw new notFoundError
    }

    let userToAddRoleId = args.userToAddRoleId;
    let roleToAdd = await ctx.prisma.query.role({where:{ id: args.roleId }}, "{ group{id} }");

    if(roleToAdd === null){
      throw new notFoundError
    }

    if(roleToAdd.group.id !== groupToUpdate.id){
      throw new Error("This role does not exist in this group");
    }

    for(let groupUser of groupToUpdate.users){
      if(groupUser.id === userToAddRoleId){
        await ctx.prisma.mutation.updateGroup(
          {
              data:{
                users:{
                  update:{
                    data: {
                      roles: {
                        set: {
                          id: args.roleId
                        }
                      }
                    },
                    where: {
                      id: userToAddRoleId 
                    }
                  } 
                }
    
              },
              where:{
                id: args.groupId
              }
          }
        )
      }
    }

    return {
      id: args.roleId
    }
  }

  throw new Error("You are not able to add a role to an user")
}

module.exports = {
  createGroup,
  addUsersToGroup,
  removeUsersToGroup,
  addRoleToUser,
  updateGroup,
  deleteGroup
}