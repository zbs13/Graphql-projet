const { createUser, updateUser } = require('./Mutations/mutationUser')
const { login, signup } = require('./auth')

const Mutation = {

    createUser,
    updateUser,

    login,
    signup
}

module.exports = {
    Mutation
}