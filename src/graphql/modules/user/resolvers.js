const db = require('../../../db')
const { generateId } = require('../../../utils/generate-id')

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

  Mutation: {
    createUser(_, args) {
      const newUser = {
        name: args.name,
        id: generateId(),
      };

      db.usersDB.push(newUser);

      return newUser.id;
    }
  }
}