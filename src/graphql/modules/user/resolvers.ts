import { db } from '../../../db';
import { generateId } from '../../../utils/generate-id';

export const resolvers = {
  User: {
    products: (context) => {
      return db.productsDB.filter(product => product.userId === context.id)
    },
  },

  Query: {
    users: () => {
      return db.usersDB
    },
    user: (id) => {
      db.usersDB.find(user => user.id === id)
    },
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
