const { forwardTo } = require('prisma-binding')

async function message (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function messages (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    message,
    messages
  }