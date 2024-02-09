import { join } from "path";

export * from "./images";
export * from "./interfaces";
export * from "./timeline";

export const dbPath = join(
  process.cwd(),
  'src',
  'backend',
  "db"
);
