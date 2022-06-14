import "reflect-metadata";
import { startServer } from "./app";

async function main() {
  const app = await startServer();
  app.listen(3001);
  console.log("서버연결중", 3001);
}

main();
