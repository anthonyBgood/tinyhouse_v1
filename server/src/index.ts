import express, { Application } from 'express';
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import {typeDefs, resolvers } from './graphql';

const port = 9000


const mount = async (app: any) => {
  
  // mongo db
  const db = await connectDatabase();
  
  // apollo for GRaphQL
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => ({ db }) 
  });
  
  await server.start();
  server.applyMiddleware({app, path: "/api"});
  app.listen(port);

  console.log(`[app]: http://localhost:${port}`);

}

// start the server
try { 
  mount(express()); 
} catch (e) { 
  console.log(e);
}

