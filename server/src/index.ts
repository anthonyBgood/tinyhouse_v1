import express from 'express';
import { ApolloServer } from "apollo-server-express";

import { schema } from "./graphql"


const app: any  = express();
const port = 9000
const server = new ApolloServer({schema});



server.start().then(res => {
    server.applyMiddleware({app, path: "/api"});
  
    app.listen({ port }, () => 
      console.log(`[app]: http://localhost:${port}`)
    );  
  });

 
/* 
server.applyMiddleware({app, path: "/app"});
app.listen(port);
console.log(`[app]: http://localhost:${port}`);

 */
