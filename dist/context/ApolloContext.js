"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloContext = void 0;
const ApolloContext = ({ req, }) => {
    return {
        Authorization: req.headers.authorization,
    };
};
exports.ApolloContext = ApolloContext;
