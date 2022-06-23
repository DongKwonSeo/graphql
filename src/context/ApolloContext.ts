// import jsonwebtoken from "jsonwebtoken";
// import dotenv from "dotenv";
// import { User } from "../entity/User";
// dotenv.config();

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

import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../entity/User";
dotenv.config();
const JWT_SECRET_KEY = "F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z";
export const ApolloContext = async ({
  req,
}: any): Promise<ApolloContextInterface> => {
  let user = undefined;
  let verified = undefined;
  let error = undefined;
  if (req.headers.authorization) {
    try {
      verified = (await jsonwebtoken.verify(
        req.headers.authorization,
        JWT_SECRET_KEY
      )) as object;
    } catch (e) {
      error = e;
    }
  }

  if (verified) {
    user = verified;
  }
  return {
    jwt: jsonwebtoken,
    invalidToken: error as Error,
    user: user as User,
    JWT_SECRET_KEY: JWT_SECRET_KEY,
    Authorization: req.headers.authorization,
  };
};

export interface ApolloContextInterface {
  jwt: any;
  invalidToken: Error;
  user: User;
  JWT_SECRET_KEY: string;
  Authorization: string | undefined;
}
