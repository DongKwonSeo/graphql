"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloAuthChecker = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const ApolloAuthChecker = async ({ context: { jwt, invalidToken, user } }, roles) => {
    console.log(jwt, "jwtjwt");
    console.log(roles, "rolesroles");
    if (invalidToken) {
        throw new apollo_server_express_1.ApolloError(invalidToken.message, invalidToken.name);
    }
    if (!user) {
        return false;
    }
    return true;
};
exports.ApolloAuthChecker = ApolloAuthChecker;
