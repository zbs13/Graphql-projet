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

/**
 * rights ids: 
 * 
 *  1 => ajouter un utilisateur au groupe
 *  2 => Supprimer un utilisateur du groupe
 *  3 => Créer un rôle dans le groupe
 *  4 => Supprimer un rôle dans le groupe
 *  5 => Supprimer un message dans le groupe
 *  6 => Affilier un rôle à un utilisateur dans le groupe
 */ 

 async function getUserRightsInGroup(ctx, userId, groupId){
  let group = await ctx.prisma.query.group({
    where: {
      id: groupId
    }
  }, '{ owner{id} users{id, roles{id}} }')
  
  if(group === null){
    throw new notFoundError;
  }

  if(group.owner.id === userId){
    return ["owner"];
  }else{
    let userRights = [];
    for(let userInGroup of group.users){
      if(userInGroup.id == user.id){
        if((userInGroup.roles).length !== 0){
          for(let userRoles of userInGroup.roles){
            for(let userRolesRights of userRoles){
              userRights.push(userRolesRights.id);
            }
          }
        }else{
          return [];
        }
      }
    }
  }

  return [];
 }

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUser,
  getUserRightsInGroup,
  APP_SECRET
}
