const { forwardTo } = require('prisma-binding')

async function right (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function rights (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    right,
    rights
  }