const { forwardTo } = require('prisma-binding')

async function createBlacklist (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateBlacklist (parent, args, ctx, info) {
  return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    createBlacklist,
    updateBlacklist
}