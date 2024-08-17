const db = require('../../../db')
const { generateId } = require('../../../utils/generate-id')

module.exports = {
  // essa query/mutation personalizada chamada de "User" funciona tanto usando o Query quanto usando o Mutation
  // se eu fizer uma Query no resolver de "users" ou fizer uma Mutation no resolver de "createUser" posso usar o "products"
  // que esta dentro da query personalizada de "User"
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

      return newUser
    }
  }
}