const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

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
            name: args.data.name

          }
      }
  )

  return {
    id:group.id
  }
}

async function addUsersToGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const requesterUser = await getUser(ctx);
  const groupToUpdate = await ctx.prisma.query.group({ where: { id: args.idGroup } }, '{ id,owner{id,firstname,lastname,email},name }')

  if(groupToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === groupToUpdate.owner.id){
    args.users.forEach(async function(item){
      const group = await ctx.prisma.mutation.updateGroup(
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
      id:groupToUpdate.id
    }
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
  
}

async function removeUsersToGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const requesterUser = await getUser(ctx);
  const groupToUpdate = await ctx.prisma.query.group({ where: { id: args.idGroup } }, '{ id,owner{id,firstname,lastname,email},name }')

  if(groupToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === groupToUpdate.owner.id){
    args.users.forEach(async function(item){
      const group = await ctx.prisma.mutation.updateGroup(
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
      id:groupToUpdate.id
    }
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
  
}

async function updateGroup (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const requesterUser = await getUser(ctx);
  const groupToUpdate = await ctx.prisma.query.group({where:{...args.where}},info)

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
  const groupToUpdate = await ctx.prisma.query.group({where:{...args.where}},info)

  if(groupToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === groupToUpdate.owner.id){
    return forwardTo('prisma')(parent, args, ctx, info)
  }
  throw new Error("Tu n'est pas celui qui a crée ce group")
}

module.exports = {
  createGroup,
  addUsersToGroup,
  removeUsersToGroup,
  updateGroup,
  deleteGroup
}