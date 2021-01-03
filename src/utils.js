require('dotenv').config()
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

async function getUser(ctx) {
  const Authorization = ctx.req.request.get('Authorization')
  if (Authorization && Authorization !== 'null') {
    const token = Authorization;
    const { userId } = jwt.verify(token, APP_SECRET)
    const user = await ctx.prisma.query.user({ where: { id: userId } }, '{ id firstname lastname email groups{id} }')
    return user
  } else {  
    throw new AuthError()
  }
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}


module.exports = {
  getUser,
  APP_SECRET
}
