// import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import { PingResolver } from "./resolvers/ping";

// import { buildSchema } from "type-graphql";

// export async function startServer() {
//   const app = express();

//   const server = new ApolloServer({
//     schema: await buildSchema({
//       resolvers: [PingResolver],
//     }),
//     context: ({ req, res }) => ({ req, res }),
//   });

//   await server.applyMiddleware({ app, path: "/graphql1" });

//   return app;
// }

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
// import { ProductResolver } from "./resolvers/ProductResolver";

export async function startServer() {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();
  const app = express();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
