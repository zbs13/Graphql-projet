const { user, users } = require('./Queries/queryUser')
const { group, groups } = require('./Queries/queryGroup')
const { message, messages } = require('./Queries/queryMessage')
const { right, rights } = require('./Queries/queryRight')
const { role, roles } = require('./Queries/queryRole')
const { blacklist, blacklists } = require('./Queries/queryBlacklist')

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
    roles,
    
    blacklist,
    blacklists
}

module.exports = {
    Query
}