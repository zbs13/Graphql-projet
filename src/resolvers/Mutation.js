const { createUser, updateUser } = require('./Mutations/mutationUser')
const { login, signup } = require('./auth')
const { createGroup, addUsersToGroup, removeUsersToGroup, updateGroup, deleteGroup } = require('./Mutations/mutationGroup')
const { createMessage, updateMessage, deleteMessage } = require('./Mutations/mutationMessage')

const Mutation = {

    createUser,
    updateUser,

    login,
    signup,

    createGroup,
    addUsersToGroup,
    removeUsersToGroup,
    updateGroup,
    deleteGroup,

    createMessage,
    updateMessage,
    deleteMessage

}

module.exports = {
    Mutation
}