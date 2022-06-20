"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const connect = async () => {
    await (0, typeorm_1.createConnection)({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "1234",
        database: "test",
        // entities: [Monster, Task, Book, User],
        entities: [path_1.default.join(__dirname, "../entity/**/**.ts")],
        logging: true,
        synchronize: true,
    });
    console.log("DB 연결중.....");
};
exports.connect = connect;
