const { forwardTo } = require('prisma-binding')
const { getUser, getUserRightsInGroup } = require('../../utils')

async function createRole (parent, args, ctx, info) {
    let user = await getUser(ctx);
    let userId = user.id;
    let rights = await getUserRightsInGroup(ctx, userId, args.data.group.connect.id);
    // 3 = right able to create a role
    if(rights.includes("3") || rights.includes("owner")){
        const role = await ctx.prisma.mutation.createRole(
            {
                data: {
                    name: args.data.name,
                    rights: args.data.rights,
                    group: args.data.group
                }
            }
        )
    
        return {
            id: role.id,
            name: role.name,
            rights: role.rights,
            group: role.group,
            users: role.users
        }
    }

    throw new Error("You are not able to create a role in this group");
}


async function deleteRole (parent, args, ctx, info) {
    let user = await getUser(ctx);
    let userId = user.id;
    let rights = await getUserRightsInGroup(ctx, userId, args.groupId);

    // 4 = right able to delete a role
    if(rights.includes("4") || rights.includes("owner")){
        const roleToDelete = await ctx.prisma.query.role({where:{id: args.where.id}, group: { id: args.groupId }}, info)

        if(roleToDelete === null){
            throw new notFoundError
        }

        return forwardTo('prisma')(parent, args, ctx, info);
    }

    throw new Error("You are not able to delete a role in this group")
}

async function addUsersToRole (parent, args, ctx, info) {
    //TODO : forwardTo if user === author || user.role === ADMIN
    const user = await getUser(ctx);
    let userId = user.id;

    const role = await ctx.prisma.query.role({
        where: {
          id: args.idRole
        }
      }, '{group{id} }')

    let rights = await getUserRightsInGroup(ctx, userId, role.group.id);
  
    if(rights.includes("1") || rights.includes("owner")){
        args.users.forEach(async function(item){
            await ctx.prisma.mutation.updateRole(
                {
                    data:{
                        users:{
                            connect:{
                                id: item.id
                            } 
                        }
                    },
                    where:{
                        id: args.idRole
                    }
                }
            )
        });
      
      
      return {
        id: args.idRole
      }
    }
    throw new Error("You are not able to add an user in this group")
    
}

async function removeUsersToRole (parent, args, ctx, info) {
//TODO : forwardTo if user === author || user.role === ADMIN
const user = await getUser(ctx);
let userId = user.id;

const role = await ctx.prisma.query.role({
    where: {
      id: args.idRole
    }
  }, '{group{id} }')

let rights = await getUserRightsInGroup(ctx, userId, role.group.id);

// 2 = right able to delete a user from group
if(rights.includes("2") || rights.includes("owner")){
    args.users.forEach(async function(item){
    await ctx.prisma.mutation.updateRole(
        {
            data:{
                users:{
                    disconnect:{
                        id: item.id
                    } 
                }
            },
            where:{
                id: args.idRole
            }
        }
    )
    });
    
    
    return {
    id: args.idRole
    }
}
throw new Error("Tu n'est pas celui qui a crée ce group")

}

module.exports = {
    createRole,
    deleteRole,
    addUsersToRole,
    removeUsersToRole
}