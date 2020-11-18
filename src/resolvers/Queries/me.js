async function me (parent, args, ctx, info) {
    const user = {
        id: "blabla",
        name: "Robin"
    }
    return user
  }

  module.exports = {
    me
  }