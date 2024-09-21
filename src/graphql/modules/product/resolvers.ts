import { db } from '../../../db'

export const resolvers = {
  Query: {
    products: () => {
      return db.productsDB
    },
  },
}