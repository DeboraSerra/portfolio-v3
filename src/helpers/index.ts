import { join } from "path";

export * from "./images";
export * from "./interfaces";
export * from "./timeline";

export const dbPath = join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "src",
  "backend",
  "db"
);
