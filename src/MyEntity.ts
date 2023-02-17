import { Entity, Property, types, PrimaryKey, Index } from  "@mikro-orm/core";

@Entity()
export class MyEntity {

  @PrimaryKey({ type: types.integer, autoincrement: true })
  id!: number;

  @Index()
  @Property({ type: types.string })
  myProperty = "";
}
