import { MikroORM } from "@mikro-orm/core";
import { MyEntity } from "./MyEntity";

export const getOrm = () => MikroORM.init({
  type: "sqlite",
  entities: [MyEntity],
  dbName: "MyDB"
});
