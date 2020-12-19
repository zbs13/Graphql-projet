# Migration `20201207182944-init`

This migration has been generated at 12/7/2020, 7:29:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN')

CREATE TABLE "blacklist" (
    "id" INTEGER NOT NULL,
    "ip" TEXT NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "tries" INTEGER NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "greeting" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "group" (
    "id" INTEGER NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,
    "tchat_jwt" TEXT,

    PRIMARY KEY ("id")
)

CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "roles" "Role" NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "is_ban" BOOLEAN NOT NULL,
    "token" TEXT,
    "create_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "user_group" (
    "user_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id","group_id")
)

CREATE INDEX "idx_6dc044c57e3c61f9" ON "group"("owner_id")

CREATE UNIQUE INDEX "user.email_unique" ON "user"("email")

CREATE INDEX "idx_8f02bf9da76ed395" ON "user_group"("user_id")

CREATE INDEX "idx_8f02bf9dfe54d947" ON "user_group"("group_id")

ALTER TABLE "group" ADD FOREIGN KEY("owner_id")REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "user_group" ADD FOREIGN KEY("group_id")REFERENCES "group"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "user_group" ADD FOREIGN KEY("user_id")REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201207182944-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,63 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model blacklist {
+  id       Int      @id
+  ip       String
+  end_time DateTime
+  tries    Int
+}
+
+model greeting {
+  id   Int    @id
+  name String
+}
+
+model group {
+  id         Int          @id
+  owner_id   Int
+  name       String
+  create_at  DateTime
+  tchat_jwt  String?
+  user       user         @relation(fields: [owner_id], references: [id])
+  user_group user_group[]
+
+  @@index([owner_id], name: "idx_6dc044c57e3c61f9")
+}
+
+model user {
+  id          Int          @id
+  email       String       @unique
+  roles       Role  
+  password    String
+  firstname   String
+  lastname    String
+  is_verified Boolean
+  is_ban      Boolean
+  token       String?
+  create_at   DateTime
+  group       group[]
+  user_group  user_group[]
+}
+
+enum Role {
+  USER
+  ADMIN
+}
+
+model user_group {
+  user_id  Int
+  group_id Int
+  group    group @relation(fields: [group_id], references: [id])
+  user     user  @relation(fields: [user_id], references: [id])
+
+  @@id([user_id, group_id])
+  @@index([user_id], name: "idx_8f02bf9da76ed395")
+  @@index([group_id], name: "idx_8f02bf9dfe54d947")
+}
```


