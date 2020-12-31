const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUser, APP_SECRET } = require('../utils')

async function signup (_, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.mutation.createUser(
      {
          data: {
            firstname: args.firstname,
            lastname: args.lastname,
            email: args.email,
            password: password,
          },
      }
  )

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  }
}

async function login (parent, {email, password}, ctx, info) {
    const user = await ctx.prisma.query.user({ where: { email } }, '{ id firstname lastname email password }')
    
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }
    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    const updateUser = await ctx.prisma.mutation.updateUser(
      {
        where: {
          id: user.id
        },
        data: {
          token: jwt.sign({ userId: user.id }, APP_SECRET)
        },
      }
  )

    return {
      token: updateUser.token,
      user
    }
  }

async function verifToken (parent, {token}, ctx, info) {
  const { userId } = jwt.verify(token, APP_SECRET);
  const user = await ctx.prisma.query.user({ where: { id: userId } }, '{ id firstname lastname email }');
  if(user === null){
    return {
      isConnected: false
    }
  }else{
    return {
      isConnected: true
    }
  }
}

// Q currently user
async function me (parent, args, ctx, info) {
    const user = await getUser(ctx)
    return user
}

  module.exports = {
    me,
    signup,
    login,
    verifToken
  }