const { forwardTo } = require('prisma-binding')

async function group (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function groups (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    group,
    groups
  }