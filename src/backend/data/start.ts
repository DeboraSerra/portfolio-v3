const fs = require("fs/promises");
const { join } = require("path");

const presstart = async () => {
  await fs.mkdir(join(process.cwd(), "src", "backend", "db"), {
    recursive: true,
  });
  const db = await fs.readdir(process.cwd() + "/src/backend/db");
  const invoicesExists = db.includes("invoices");
  const loginExists = db.includes("login.json");
  if (!invoicesExists) {
    await fs.mkdir(process.cwd() + "/src/backend/db/invoices");
  }
  if (!loginExists) {
    await fs.writeFile(
      process.cwd() + "/src/backend/db/login.json",
      JSON.stringify([])
    );
  }
};

presstart();
