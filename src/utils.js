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
  

  const group = await ctx.prisma.query.group({
    where: {
      id:groupId
    }
  }, '{owner{id}}')
  
  if(group.owner.id === userId){
    return ["owner"];
  }else{
    const roles = await ctx.prisma.query.roles({
      where: {
        AND:{
          group:{
            id: groupId
          },
          users_some:{
            id: userId
          }
        }
        
      }
    }, '{ id, name, group{id, owner{id}} }')

    let userRights = [];
    for(let userRole of roles){
      for(let userRight of userRole.rights){
        userRights.push(userRight.id);
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
