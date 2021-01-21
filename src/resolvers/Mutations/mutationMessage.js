const { forwardTo } = require('prisma-binding')
const { getUser, getUserRightsInGroup } = require('../../utils')

async function createMessage (parent, args, ctx, info) {
  const requesterUser = await getUser(ctx);
  var groupFound = false;
  requesterUser.groups.forEach(async function(group){
    if(group.id == args.data.toGroup.connect.id){
        groupFound = true;
    }
  });
  if(groupFound === false){
    throw new Error("Tu n'est pas dans ce groupe")
  }
  const message = await ctx.prisma.mutation.createMessage(
      {
          data: {
            text: args.data.text,
            sentBy:{
              connect:{
                id: requesterUser.id
              } 
            },
            toGroup: {
              connect:{
                id: args.data.toGroup.connect.id
              } 
            }

          }
      }
  )

  return {
    id:message.id
  }
}


async function updateMessage (parent, args, ctx, info) {
  //TODO : forwardTo if user === author || user.role === ADMIN
  const requesterUser = await getUser(ctx);
  const messageToUpdate = await ctx.prisma.query.message({where:{...args.where}},info)

  if(messageToUpdate === null){
    throw new notFoundError
  }
  if(requesterUser.id === messageToUpdate.sentBy.id){
    return forwardTo('prisma')(parent, args, ctx, info)
  }
  throw new Error("Tu n'est pas celui qui a crée ce message")
  
}

async function deleteMessage (parent, args, ctx, info) {
  const user = await getUser(ctx);
  const messageToDelete = await ctx.prisma.query.message({where:{...args.where}},info)
  let userId = user.id;
  let rights = await getUserRightsInGroup(ctx, userId, args.groupId);

  if(messageToDelete === null){
    throw new notFoundError
  }

  // 5 = right able to delete a message in the group
  if(rights.includes("5") || rights.includes("owner") || userId == messageToDelete.owner.id){
      return forwardTo('prisma')(parent, args, ctx, info)
  }

  throw new Error("You are not able to delete this message")
    
}

module.exports = {
  createMessage,
  updateMessage,
  deleteMessage
}