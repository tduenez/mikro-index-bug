Combining `@Index` and `jest.mock()` results in duplicated indexes.

```
create table `my_entity` (`id` integer not null primary key autoincrement, `my_property` text not null default '');
create index `my_entity_my_property_index` on `my_entity` (`my_property`);
create index `my_entity_my_property_index` on `my_entity` (`my_property`);
create index `my_entity_my_property_index` on `my_entity` (`my_property`);
```

https://github.com/mikro-orm/mikro-orm/issues/4013
