const { ApolloServer } = require("apollo-server")
const { typeDefs, resolvers } = require('./src/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return new Error(err.message)
  }
})

server.listen(8000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))