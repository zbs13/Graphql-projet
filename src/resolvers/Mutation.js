const { createPost, updatePost } = require('./Mutations/mutationPost')
const { createUser, updateUser } = require('./Mutations/mutationUser')
const { login, signup } = require('./auth')

const Mutation = {
    createPost,
    updatePost,

    createUser,
    updateUser,

    login,
    signup
}

module.exports = {
    Mutation
}