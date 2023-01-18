import { makeSchema, queryComplexityPlugin } from "nexus";
import { join } from "path";

import types from "./types";

export default makeSchema({
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
    },
  },
  plugins: [queryComplexityPlugin()],
  types,
  outputs: {
    typegen: join(__dirname, "./generated", "nexus-typegen.ts"), // 2
    schema: join(__dirname, "./generated", "schema.graphql"), // 3
  },
});
