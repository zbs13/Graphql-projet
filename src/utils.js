require('dotenv').config()
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

async function getUser(ctx) {
  const Authorization = ctx.req.request.get('Authorization')
  if (Authorization && Authorization !== 'null') {
    const token = Authorization;
    console.log("user", jwt.verify(token, APP_SECRET));
    const { userId } = jwt.verify(token, APP_SECRET)
    const user = await ctx.prisma.query.user({ where: { id: userId } }, '{ id name email role posts { id content } }')
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
  APP_SECRET,
  AuthError
}
