const { forwardTo } = require('prisma-binding')

async function post (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function posts (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    post,
    posts
  }