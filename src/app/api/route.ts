import path from 'node:path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './graphql/resolvers/user-resolver';
import { CommentResolver } from './graphql/resolvers/comment-resolver';
import mongoose, { MongooseError } from "mongoose";

const DB_URI = process.env.DB?.replace("<password>", process.env.DB_PASSWORD!)!;

mongoose.connect(process.env.DB_LOCAL!)
const db = mongoose.connection;

db.once('open', () => { 
  console.log("✅ Connected to database");
});

db.on('error', (err: MongooseError) => { 
  console.error('❌ MongoDB connection error:', err.message); 
  process.exit(1);
});

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