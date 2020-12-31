const { user, users } = require('./Queries/queryUser')
const { group, groups } = require('./Queries/queryGroup')
const { message, messages } = require('./Queries/queryMessage')

const Query = {
    user,
    users,
    group,
    groups,
    message,
    messages
}

module.exports = {
    Query
}