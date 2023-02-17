import { getOrm } from "./Mikro";
import { methodA } from "./ModuleA";
import { methodB } from "./ModuleB";

jest.mock("./ModuleA");
jest.mock("./ModuleB");

describe("mikro-index-bug", () => {
  beforeAll(async () => {
    const orm = await getOrm();
    console.log(await orm.getSchemaGenerator().getCreateSchemaSQL());
    await orm.close();

  });

  it("my test", () => {
    methodA();
    methodB();
  });
});
