const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../utils')

async function createRight (parent, args, ctx, info) {
    const right = await ctx.prisma.mutation.createRight(
        {
            data: {
                id: args.data.id,
                name: args.data.name
            }
        }
    )

    return {
        id: right.id
    }
}

module.exports = {
    createRight
}