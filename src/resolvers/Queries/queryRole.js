const { forwardTo } = require('prisma-binding')

async function role (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function roles (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    role,
    roles
  }