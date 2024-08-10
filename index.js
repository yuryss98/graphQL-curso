const { gql, ApolloServer } = require("apollo-server")

const usersDB = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  }
];

const productsDB = [
  {
    id: 1,
    name: "Product 1",
    userId: 1
  },
  {
    id: 2,
    name: "Product 2",
    userId: 2
  },
  {
    id: 3,
    name: "Product 3",
    userId: 2
  }
];

const server = new ApolloServer({
  typeDefs: gql`
    type User {
      id: Int
      name: String
      products: [Product]
    }

    type Product {
      id: Int
      name: String
      userId: Int
    }

    type Query {
      users: [User]
      products: [Product]
    }
  `,

  resolvers: {
    User: {
      products: (context) => {
        return productsDB.filter(product => product.userId === context.id)
      },
    },

    Query: {
      users: () => usersDB,
      products: () => productsDB,
    },
  },
})

server.listen(8000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))