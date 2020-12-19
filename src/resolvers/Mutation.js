const { createUser, updateUser } = require('./Mutations/mutationUser')
const { login, signup } = require('./auth')
const { createGroup, addUsersToGroup, removeUsersToGroup, updateGroup, deleteGroup } = require('./Mutations/mutationGroup')

const Mutation = {

    createUser,
    updateUser,

    login,
    signup,

    createGroup,
    addUsersToGroup,
    removeUsersToGroup,
    updateGroup,
    deleteGroup

}

module.exports = {
    Mutation
}