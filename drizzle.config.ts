// import { type Config } from "drizzle-kit";

// import { env } from "~/env";

// export default {
//   schema: "./src/server/db/schema.ts",

//   dialect: "postgres",
//   dbCredentials: {
//     connectionString: env.POSTGRES_URL,
//   },
//   tablesFilter: ["gallery-demo-dizeel_*"],
// } satisfies Config;

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL ?? "",
  },
  verbose: true,
  strict: true,
  tablesFilter: ["gallery-demo-dizeel_*"],
});
