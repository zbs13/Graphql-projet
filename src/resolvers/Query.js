const { user, users } = require('./Queries/queryUser')
const { group, groups } = require('./Queries/queryGroup')

const Query = {
    user,
    users,
    group,
    groups
}

module.exports = {
    Query
}