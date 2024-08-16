const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { join } = require('path')

const allTypes = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'));

module.exports = {
  typeDefs: mergeTypeDefs(allTypes),
  resolvers: mergeResolvers(allResolvers),
}