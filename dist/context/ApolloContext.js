"use strict";
// import jsonwebtoken from "jsonwebtoken";
// import dotenv from "dotenv";
// import { User } from "../entity/User";
// dotenv.config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloContext = void 0;
// const JWT_SECRET_KEY = "testkey";
// export const ApolloContext = async ({
//   req,
// }: {
//   req: any;
// }): Promise<ApolloContextInterface> => {
//   let user = null;
//   let verified = {};
//   let error = undefined;
//   if (req.headers.authorization) {
//     try {
//       verified = await jsonwebtoken.verify(
//         req.headers.authorization,
//         JWT_SECRET_KEY
//       );
//     } catch (e) {
//       error = e;
//     }
//   }
//   if (verified) {
//     user = { ...verified };
//   }
//   return {
//     jwt: jsonwebtoken,
//     invalidToken: error as Error,
//     user: user as User,
//     JWT_SECRET_KEY: JWT_SECRET_KEY,
//     Authorization: req.headers.authorization,
//   };
// };
// export interface ApolloContextInterface {
//   jwt: any;
//   invalidToken: Error;
//   user: User;
//   JWT_SECRET_KEY: string;
//   Authorization: string | undefined;
// }
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET_KEY = "testkey";
const ApolloContext = async ({ req, }) => {
    let user = null;
    let verified = {};
    let error = undefined;
    if (req.headers.authorization) {
        try {
            verified = await jsonwebtoken_1.default.verify(req.headers.authorization, JWT_SECRET_KEY);
        }
        catch (e) {
            error = e;
        }
    }
    if (verified) {
        user = {
            ...verified,
        };
    }
    return {
        jwt: jsonwebtoken_1.default,
        invalidToken: error,
        user: user,
        JWT_SECRET_KEY: JWT_SECRET_KEY,
        Authorization: req.headers.authorization,
    };
};
exports.ApolloContext = ApolloContext;
