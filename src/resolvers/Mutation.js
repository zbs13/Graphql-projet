const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { login, signup, verifToken } = require('./auth')
const { createGroup, addUsersToGroup, removeUsersToGroup, updateGroup, deleteGroup } = require('./Mutations/mutationGroup')
const { createMessage, updateMessage, deleteMessage } = require('./Mutations/mutationMessage')
const { createRight } = require('./Mutations/mutationRight')
const { createRole, deleteRole, addUsersToRole, removeUsersToRole } = require('./Mutations/mutationRole')
const { createBlacklist, updateBlacklist } = require('./Mutations/mutationBlacklist')

const Mutation = {

    createUser,
    updateUser,
    deleteUser,

    login,
    signup,
    verifToken,

    createGroup,
    addUsersToGroup,
    removeUsersToGroup,
    updateGroup,
    deleteGroup,
    

    createMessage,
    updateMessage,
    deleteMessage,

    createRight,

    createRole,
    deleteRole,
    addUsersToRole,
    removeUsersToRole,
    
    createBlacklist,
    updateBlacklist

}

module.exports = {
    Mutation
}