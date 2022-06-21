"use strict";
// import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import { PingResolver } from "./resolvers/ping";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
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
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const apollo_server_core_1 = require("apollo-server-core");
const ping_1 = require("./resolvers/ping");
const MonsterResolver_1 = require("./resolvers/MonsterResolver");
const bookResolver_1 = require("./resolvers/bookResolver");
const userResolver_1 = require("./resolvers/userResolver");
const ApolloContext_1 = require("./context/ApolloContext");
const AuthChecker_1 = require("./context/AuthChecker");
// import { ProductResolver } from "./resolvers/ProductResolver";
async function startServer() {
    const server = new apollo_server_express_1.ApolloServer({
        context: ApolloContext_1.ApolloContext,
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [ping_1.PingResolver, MonsterResolver_1.MonsterResolver, bookResolver_1.BookResolver, userResolver_1.UserResolver],
            validate: false,
            authChecker: AuthChecker_1.ApolloAuthChecker,
            // authMode: "null",
        }),
        plugins: [
            apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground,
            // ApolloServerPluginInlineTrace,
        ],
    });
    await server.start();
    const app = (0, express_1.default)();
    server.applyMiddleware({ app, path: "/graphql" });
    return app;
}
exports.startServer = startServer;
