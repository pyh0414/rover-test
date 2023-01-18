import { ApolloServer } from "apollo-server";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

import schema from "./schema";

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
