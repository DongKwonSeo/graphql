import { AuthChecker } from "type-graphql";
import { ApolloError } from "apollo-server-express";
import { ApolloContextInterface } from "./ApolloContext";
export const ApolloAuthChecker: AuthChecker<ApolloContextInterface> = async (
  { context: { jwt, invalidToken, user } },
  roles
) => {
  console.log(user, "useruseruseruser");
  if (invalidToken) {
    throw new ApolloError(invalidToken.message, invalidToken.name);
  }
  if (!user) {
    return false;
  }
  return true;
};
