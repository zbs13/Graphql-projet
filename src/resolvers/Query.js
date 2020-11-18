const { me } = require('./auth')
const { user, users } = require('./Queries/queryUser')
const { post, posts } = require('./Queries/queryPost')

const Query = {
    me,
    user,
    users,
    post,
    posts
}

module.exports = {
    Query
}