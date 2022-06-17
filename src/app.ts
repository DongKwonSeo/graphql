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
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PingResolver } from "./resolvers/ping";
import { MonsterResolver } from "./resolvers/MonsterResolver";
import { BookResolver } from "./resolvers/bookResolver";
// import { ProductResolver } from "./resolvers/ProductResolver";

export async function startServer() {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, MonsterResolver, BookResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();
  const app = express();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
