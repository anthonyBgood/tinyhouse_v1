require("dotenv").config();

import express, { Application } from 'express';
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import {typeDefs, resolvers } from './graphql';


const mount = async (app: any) => {
  
  // mongo db
  const db = await connectDatabase();
  
  // apollo for GraphQL
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => ({ db }) 
  });
  
  await server.start();
  server.applyMiddleware({app, path: "/api"});
  app.listen(process.env.PORT);

  console.log(`[app]: http://localhost:${process.env.PORT}`);

}

// start the server
try { 
  mount(express()); 
} catch (e) { 
  console.log(e);
}

