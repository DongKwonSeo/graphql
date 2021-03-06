import { Book } from "./../entity/Book";
import { createConnection } from "typeorm";
import path from "path";
import { Monster } from "../entity/Monster";
import { Task } from "./../entity/Task";
import { User } from "../entity/User";

export const connect = async () => {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "test",
    // entities: [Monster, Task, Book, User],
    entities: [path.join(__dirname, "../entity/**/**.ts")],
    logging: true,
    synchronize: true,
  });
  console.log("DB 연결중.....");
};
