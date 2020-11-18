const { forwardTo } = require('prisma-binding')
const { getUser, AuthError } = require("../../utils")

async function createPost (parent, args, ctx, info) {
  //TODO : enlever le require sur le author dans la mutation // mettre le author grâce a son JWT sinon Not Authorized

  let requesterUser = await getUser(ctx);
  if(requesterUser.role === "ADMIN"){
    return forwardTo('prisma')(parent, args, ctx, info)
  }

  throw new AuthError()
}

async function updatePost (parent, args, ctx, info) {
  let requesterUser = await getUser(ctx);
  const post = await ctx.prisma.query.posts({ where: { author: { id: requesterUser.id }, id: args.where.id } }, '{ id }')
  //TODO : forwardTo if user === author || user.role === ADMIN
  if(post.length === 0 || requesterUser.role !== "ADMIN"){
    throw new PostError();
  }

  return forwardTo('prisma')(parent, args, ctx, info)
}

class PostError extends Error {
  constructor() {
    super('Post not found')
  }
}

module.exports = {
  createPost,
  updatePost
}