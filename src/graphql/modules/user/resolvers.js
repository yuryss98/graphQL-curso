const db = require('../../../db')

module.exports = {
  User: {
    products: (context) => {
      return db.productsDB.filter(product => product.userId === context.id)
    },
  },

  Query: {
    users: () => db.usersDB,
    user: ((_, { id }) => db.usersDB.find(user => user.id === id)),
  },
}