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
  // TODO mettre en prod
  const ip = ctx.headers["x-forwarded-for"];
  // query vérification de l'ip
  const blacklist = await ctx.prisma.query.blacklists({ where: { ip } }, '{ id ip end_time tries }')
  const curentDate = new Date();
  const banDate = new Date(blacklist[0].end_time);
  const user = await ctx.prisma.query.user({ where: { email } }, '{ id firstname lastname email password }')

  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    // update de l'ip et des tries update 
    if(blacklist[0]) {
      if(curentDate < banDate) {
          throw new Error(`Try later`)
      } else {
        if(blacklist[0].tries == 5) {
          var dateBan = new Date();
          dateBan.setMinutes( dateBan.getMinutes() + 30);
          await ctx.prisma.mutation.updateBlacklist({
            where: {
              id: blacklist[0].id
            },
            data: {
              end_time: dateBan,
              tries: 0
            }
          })
        } else {
          const addTries = blacklist[0].tries + 1;
          await ctx.prisma.mutation.updateBlacklist({
            where: {
              id: blacklist[0].id
            },
            data: {
              end_time: null,
              tries: addTries
            }
          })
        }
      }      
    } else {
      //createBlacklist
      await ctx.prisma.mutation.createBlacklist({
        data: {
          ip: ip,
          tries: 1
        }
      })
    }
    throw new Error('Invalid password')
  } else {
    await ctx.prisma.mutation.updateBlacklist(
      {
        where: {
          ip: ip
        },
        data: {
          tries: 0
        }
      })
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