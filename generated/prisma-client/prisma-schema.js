module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBlacklist {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateRight {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Blacklist {
  id: ID!
  ip: String
  end_time: DateTime
}

type BlacklistConnection {
  pageInfo: PageInfo!
  edges: [BlacklistEdge]!
  aggregate: AggregateBlacklist!
}

input BlacklistCreateInput {
  id: ID
  ip: String
  end_time: DateTime
}

type BlacklistEdge {
  node: Blacklist!
  cursor: String!
}

enum BlacklistOrderByInput {
  id_ASC
  id_DESC
  ip_ASC
  ip_DESC
  end_time_ASC
  end_time_DESC
}

type BlacklistPreviousValues {
  id: ID!
  ip: String
  end_time: DateTime
}

type BlacklistSubscriptionPayload {
  mutation: MutationType!
  node: Blacklist
  updatedFields: [String!]
  previousValues: BlacklistPreviousValues
}

input BlacklistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlacklistWhereInput
  AND: [BlacklistSubscriptionWhereInput!]
  OR: [BlacklistSubscriptionWhereInput!]
  NOT: [BlacklistSubscriptionWhereInput!]
}

input BlacklistUpdateInput {
  ip: String
  end_time: DateTime
}

input BlacklistUpdateManyMutationInput {
  ip: String
  end_time: DateTime
}

input BlacklistWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ip: String
  ip_not: String
  ip_in: [String!]
  ip_not_in: [String!]
  ip_lt: String
  ip_lte: String
  ip_gt: String
  ip_gte: String
  ip_contains: String
  ip_not_contains: String
  ip_starts_with: String
  ip_not_starts_with: String
  ip_ends_with: String
  ip_not_ends_with: String
  end_time: DateTime
  end_time_not: DateTime
  end_time_in: [DateTime!]
  end_time_not_in: [DateTime!]
  end_time_lt: DateTime
  end_time_lte: DateTime
  end_time_gt: DateTime
  end_time_gte: DateTime
  AND: [BlacklistWhereInput!]
  OR: [BlacklistWhereInput!]
  NOT: [BlacklistWhereInput!]
}

input BlacklistWhereUniqueInput {
  id: ID
}

scalar DateTime

type Group {
  id: ID!
  owner: User!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  id: ID
  owner: UserCreateOneWithoutGroupsOwnerInput!
  name: String!
  users: UserCreateManyWithoutGroupsInput
}

input GroupCreateManyWithoutOwnerInput {
  create: [GroupCreateWithoutOwnerInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneInput {
  create: GroupCreateInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutOwnerInput {
  id: ID
  name: String!
  users: UserCreateManyWithoutGroupsInput
}

input GroupCreateWithoutUsersInput {
  id: ID
  owner: UserCreateOneWithoutGroupsOwnerInput!
  name: String!
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateDataInput {
  owner: UserUpdateOneRequiredWithoutGroupsOwnerInput
  name: String
  users: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateInput {
  owner: UserUpdateOneRequiredWithoutGroupsOwnerInput
  name: String
  users: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateManyDataInput {
  name: String
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateManyWithoutOwnerInput {
  create: [GroupCreateWithoutOwnerInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  set: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  set: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateOneInput {
  create: GroupCreateInput
  update: GroupUpdateDataInput
  upsert: GroupUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutOwnerDataInput {
  name: String
  users: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateWithoutUsersDataInput {
  owner: UserUpdateOneRequiredWithoutGroupsOwnerInput
  name: String
}

input GroupUpdateWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutOwnerDataInput!
}

input GroupUpdateWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUsersDataInput!
}

input GroupUpsertNestedInput {
  update: GroupUpdateDataInput!
  create: GroupCreateInput!
}

input GroupUpsertWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutOwnerDataInput!
  create: GroupCreateWithoutOwnerInput!
}

input GroupUpsertWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutUsersDataInput!
  create: GroupCreateWithoutUsersInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBlacklist(data: BlacklistCreateInput!): Blacklist!
  updateBlacklist(data: BlacklistUpdateInput!, where: BlacklistWhereUniqueInput!): Blacklist
  updateManyBlacklists(data: BlacklistUpdateManyMutationInput!, where: BlacklistWhereInput): BatchPayload!
  upsertBlacklist(where: BlacklistWhereUniqueInput!, create: BlacklistCreateInput!, update: BlacklistUpdateInput!): Blacklist!
  deleteBlacklist(where: BlacklistWhereUniqueInput!): Blacklist
  deleteManyBlacklists(where: BlacklistWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createRight(data: RightCreateInput!): Right!
  updateRight(data: RightUpdateInput!, where: RightWhereUniqueInput!): Right
  updateManyRights(data: RightUpdateManyMutationInput!, where: RightWhereInput): BatchPayload!
  upsertRight(where: RightWhereUniqueInput!, create: RightCreateInput!, update: RightUpdateInput!): Right!
  deleteRight(where: RightWhereUniqueInput!): Right
  deleteManyRights(where: RightWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  blacklist(where: BlacklistWhereUniqueInput!): Blacklist
  blacklists(where: BlacklistWhereInput, orderBy: BlacklistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Blacklist]!
  blacklistsConnection(where: BlacklistWhereInput, orderBy: BlacklistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlacklistConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  right(where: RightWhereUniqueInput!): Right
  rights(where: RightWhereInput, orderBy: RightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Right]!
  rightsConnection(where: RightWhereInput, orderBy: RightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RightConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Right {
  id: ID!
  name: String!
}

type RightConnection {
  pageInfo: PageInfo!
  edges: [RightEdge]!
  aggregate: AggregateRight!
}

input RightCreateInput {
  id: ID
  name: String!
}

input RightCreateManyInput {
  create: [RightCreateInput!]
  connect: [RightWhereUniqueInput!]
}

type RightEdge {
  node: Right!
  cursor: String!
}

enum RightOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type RightPreviousValues {
  id: ID!
  name: String!
}

input RightScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RightScalarWhereInput!]
  OR: [RightScalarWhereInput!]
  NOT: [RightScalarWhereInput!]
}

type RightSubscriptionPayload {
  mutation: MutationType!
  node: Right
  updatedFields: [String!]
  previousValues: RightPreviousValues
}

input RightSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RightWhereInput
  AND: [RightSubscriptionWhereInput!]
  OR: [RightSubscriptionWhereInput!]
  NOT: [RightSubscriptionWhereInput!]
}

input RightUpdateDataInput {
  name: String
}

input RightUpdateInput {
  name: String
}

input RightUpdateManyDataInput {
  name: String
}

input RightUpdateManyInput {
  create: [RightCreateInput!]
  update: [RightUpdateWithWhereUniqueNestedInput!]
  upsert: [RightUpsertWithWhereUniqueNestedInput!]
  delete: [RightWhereUniqueInput!]
  connect: [RightWhereUniqueInput!]
  set: [RightWhereUniqueInput!]
  disconnect: [RightWhereUniqueInput!]
  deleteMany: [RightScalarWhereInput!]
  updateMany: [RightUpdateManyWithWhereNestedInput!]
}

input RightUpdateManyMutationInput {
  name: String
}

input RightUpdateManyWithWhereNestedInput {
  where: RightScalarWhereInput!
  data: RightUpdateManyDataInput!
}

input RightUpdateWithWhereUniqueNestedInput {
  where: RightWhereUniqueInput!
  data: RightUpdateDataInput!
}

input RightUpsertWithWhereUniqueNestedInput {
  where: RightWhereUniqueInput!
  update: RightUpdateDataInput!
  create: RightCreateInput!
}

input RightWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RightWhereInput!]
  OR: [RightWhereInput!]
  NOT: [RightWhereInput!]
}

input RightWhereUniqueInput {
  id: ID
}

type Role {
  id: ID!
  name: String!
  rights(where: RightWhereInput, orderBy: RightOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Right!]
  group: Group
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  id: ID
  name: String!
  rights: RightCreateManyInput
  group: GroupCreateOneInput
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
}

input RoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RoleScalarWhereInput!]
  OR: [RoleScalarWhereInput!]
  NOT: [RoleScalarWhereInput!]
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateDataInput {
  name: String
  rights: RightUpdateManyInput
  group: GroupUpdateOneInput
}

input RoleUpdateInput {
  name: String
  rights: RightUpdateManyInput
  group: GroupUpdateOneInput
}

input RoleUpdateManyDataInput {
  name: String
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  set: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  rights_every: RightWhereInput
  rights_some: RightWhereInput
  rights_none: RightWhereInput
  group: GroupWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  blacklist(where: BlacklistSubscriptionWhereInput): BlacklistSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  right(where: RightSubscriptionWhereInput): RightSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  create_at: DateTime
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  groupsOwner(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groups: GroupCreateManyWithoutUsersInput
  groupsOwner: GroupCreateManyWithoutOwnerInput
  roles: RoleCreateManyInput
}

input UserCreateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutGroupsOwnerInput {
  create: UserCreateWithoutGroupsOwnerInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGroupsInput {
  id: ID
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groupsOwner: GroupCreateManyWithoutOwnerInput
  roles: RoleCreateManyInput
}

input UserCreateWithoutGroupsOwnerInput {
  id: ID
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groups: GroupCreateManyWithoutUsersInput
  roles: RoleCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  is_verified_ASC
  is_verified_DESC
  is_ban_ASC
  is_ban_DESC
  token_ASC
  token_DESC
  create_at_ASC
  create_at_DESC
}

type UserPreviousValues {
  id: ID!
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  create_at: DateTime
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  is_verified: Boolean
  is_verified_not: Boolean
  is_ban: Boolean
  is_ban_not: Boolean
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  create_at: DateTime
  create_at_not: DateTime
  create_at_in: [DateTime!]
  create_at_not_in: [DateTime!]
  create_at_lt: DateTime
  create_at_lte: DateTime
  create_at_gt: DateTime
  create_at_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groups: GroupUpdateManyWithoutUsersInput
  groupsOwner: GroupUpdateManyWithoutOwnerInput
  roles: RoleUpdateManyInput
}

input UserUpdateManyDataInput {
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
}

input UserUpdateManyMutationInput {
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
}

input UserUpdateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutGroupsOwnerInput {
  create: UserCreateWithoutGroupsOwnerInput
  update: UserUpdateWithoutGroupsOwnerDataInput
  upsert: UserUpsertWithoutGroupsOwnerInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGroupsDataInput {
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groupsOwner: GroupUpdateManyWithoutOwnerInput
  roles: RoleUpdateManyInput
}

input UserUpdateWithoutGroupsOwnerDataInput {
  firstname: String
  lastname: String
  email: String
  password: String
  phone: String
  is_verified: Boolean
  is_ban: Boolean
  token: String
  groups: GroupUpdateManyWithoutUsersInput
  roles: RoleUpdateManyInput
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpsertWithoutGroupsOwnerInput {
  update: UserUpdateWithoutGroupsOwnerDataInput!
  create: UserCreateWithoutGroupsOwnerInput!
}

input UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  is_verified: Boolean
  is_verified_not: Boolean
  is_ban: Boolean
  is_ban_not: Boolean
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  create_at: DateTime
  create_at_not: DateTime
  create_at_in: [DateTime!]
  create_at_not_in: [DateTime!]
  create_at_lt: DateTime
  create_at_lte: DateTime
  create_at_gt: DateTime
  create_at_gte: DateTime
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  groupsOwner_every: GroupWhereInput
  groupsOwner_some: GroupWhereInput
  groupsOwner_none: GroupWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    