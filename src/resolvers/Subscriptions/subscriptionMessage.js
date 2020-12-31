const { forwardTo } = require('prisma-binding')
const { getUser,APP_SECRET  } = require('../../utils')
const jwt = require('jsonwebtoken')

/*
async function message (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
*/


async function subscribeToNewMessage(parent, {token}, ctx, info) {
  const { userId } = jwt.verify(token, APP_SECRET);
  return ctx.prisma.subscription.message(
    {
      where: {
        mutation_in: ['CREATED'],
        node:{
          toGroup:{
            users_some:{
              id: userId
            }
          }
        }
      }
    },
    info
  );
}


module.exports = {
  subscribeToNewMessage
}

