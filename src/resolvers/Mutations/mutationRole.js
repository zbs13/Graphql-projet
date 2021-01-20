const { forwardTo } = require('prisma-binding')
const { getUser, getUserRightsInGroup } = require('../../utils')

async function createRole (parent, args, ctx, info) {
    let user = await getUser(ctx);
    let userId = user.id;
    let rights = await getUserRightsInGroup(ctx, userId, args.data.group.connect.id);

    // 3 = right able to create a role
    if(rights.includes("3") || rights.includes("owner")){
        const role = await ctx.prisma.mutation.createRole(
            {
                data: {
                    name: args.data.name,
                    rights: {
                        connect: args.data.rights.connect
                    },
                    group: {
                        connect: {
                            id: args.data.group.connect.id
                        } 
                    }
                }
            }
        )
    
        return {
            id: role.id,
            name: role.name,
            rights: role.rights,
            group: role.group
        }
    }

    throw new Error("You are not able to create a role in this group");
}

async function updateRole (parent, args, ctx, info) {
  
}

async function deleteRole (parent, args, ctx, info) {
    let user = await getUser(ctx);
    let userId = user.id;
    let rights = await getUserRightsInGroup(ctx, userId, args.data.group.connect.id);

    // 4 = right able to delete a role
    if(rights.includes("4") || rights.includes("owner")){
        const roleToDelete = await ctx.prisma.query.role({where:{...args.where}}, info)

        if(roleToDelete === null){
            throw new notFoundError
        }

        return forwardTo('prisma')(parent, args, ctx, info);
    }

    throw new Error("You are not able to delete a role in this group")
}

module.exports = {
    createRole,
    updateRole,
    deleteRole
}