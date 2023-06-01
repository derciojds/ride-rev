import path from 'node:path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import {buildSchema} from 'type-graphql';
import { UserResolver } from './resolvers/user-resolver';
import { CommentResolver } from './resolvers/comment-resolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      CommentResolver
    ],
    emitSchemaFile: path.resolve(process.cwd() + '/src/app/api/graphql', 'schema.gql')
  })

  const server = new ApolloServer({ schema })
  
  const handler = startServerAndCreateNextHandler<NextRequest>(server, { 
    context: async req => ({ req }) 
  });

  return handler
}

const handlerPromise = main();

export async function GET(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}

export async function POST(request: NextRequest) {
  const handler = await handlerPromise;
  return handler(request);
}