"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Right",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Blacklist",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: "https://graphql-projet-36f0fae215.herokuapp.com/Graphql-projet/dev"
});
exports.prisma = new exports.Prisma();
