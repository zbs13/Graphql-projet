const { user, users } = require('./Queries/queryUser')
const { group, groups } = require('./Queries/queryGroup')
const { message, messages } = require('./Queries/queryMessage')
const { right, rights } = require('./Queries/queryRight')
const { role, roles } = require('./Queries/queryRole')

const Query = {
    user,
    users,
    group,
    groups,
    message,
    messages,
    right,
    rights,
    role,
    roles
}

module.exports = {
    Query
}