import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema, NonEmptyArray } from 'type-graphql';
import { loadFilesSync } from '@graphql-tools/load-files'
import { join } from 'path';

async function bootstrap() {
  const resolverFiles = loadFilesSync(join(__dirname, '.', 'graphql', '**', '*.resolver.*'), { extensions: ['js', 'ts'] });

  const resolvers = resolverFiles.flatMap((file) => Object.values(file));

  const schema = await buildSchema({
    resolvers: resolvers as NonEmptyArray<Function>
  });

  const server = new ApolloServer({
    schema,
    formatError: (err) => new Error(err.message),
  });

  server.listen(8000).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
}

bootstrap();