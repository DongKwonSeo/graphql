import { createConnection } from "typeorm";
import path from "path";

export const connect = async () => {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "test",
    entities: [path.join(__dirname, "../entity/**/**.ts")],
    logging: true,
    synchronize: true,
  });
  console.log("DB 연결중.....");
};
