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
    createUser(_, { newUser }) {
      const userFound = db.usersDB.find(user => user.name === newUser.name)
      if (userFound) {
        throw new Error('User already exists')
      }

      const user = {
        name: newUser.name,
        id: generateId(),
      };

      db.usersDB.push(user);

      return user;
    }
  }
}