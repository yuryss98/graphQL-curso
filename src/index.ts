import { ApolloServer } from "apollo-server"
import { typeDefs, resolvers } from './graphql'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return new Error(err.message)
  }
})

server.listen(8000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))