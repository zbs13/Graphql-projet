const { forwardTo } = require('prisma-binding')

async function blacklist (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function blacklists (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    blacklist,
    blacklists
  }