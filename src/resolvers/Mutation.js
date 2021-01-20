const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { login, signup, verifToken } = require('./auth')
const { createGroup, addUsersToGroup, removeUsersToGroup, updateGroup, deleteGroup, addRoleToUser } = require('./Mutations/mutationGroup')
const { createMessage, updateMessage, deleteMessage } = require('./Mutations/mutationMessage')
const { createRight } = require('./Mutations/mutationRight')
const { createRole, updateRole, deleteRole } = require('./Mutations/mutationRole')

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
    addRoleToUser,

    createMessage,
    updateMessage,
    deleteMessage,

    createRight,

    createRole,
    updateRole,
    deleteRole

}

module.exports = {
    Mutation
}