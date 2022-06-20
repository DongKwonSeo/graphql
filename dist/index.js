"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const typeorm_1 = require("./config/typeorm");
async function main() {
    (0, typeorm_1.connect)();
    const app = await (0, app_1.startServer)();
    app.listen(3009);
    console.log("서버연결중", 3009);
}
main();
