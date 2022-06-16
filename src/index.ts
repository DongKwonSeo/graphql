import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

async function main() {
  connect();
  const app = await startServer();
  app.listen(3009);
  console.log("서버연결중", 3009);
}

main();
