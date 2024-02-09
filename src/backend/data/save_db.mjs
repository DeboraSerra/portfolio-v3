import { randomUUID } from "crypto";
import fs from "fs/promises";

const writeFile = async (srcFileName, destFileName) => {
  const data = (
    await fs.readFile(`src/backend/python_files/${srcFileName}.txt`, "utf-8")
  )
    .split(", (")
    .filter((el) => el !== "")
    .map((el) => {
      const [name, description, link, src] = el.replace(")", "").split('", "');
      return {
        id: randomUUID(),
        name: name.replace('"', ""),
        description: description.replace('"', ""),
        repository: link.replace('"', ""),
        image: src.replace('"', ""),
      };
    });
  await fs.writeFile(
    `src/backend/db/${destFileName}.json`,
    JSON.stringify(data, null, 2)
  );
};

const main = async () => {
  const files = (await fs.readdir("src/backend/python_files"))
    .filter((el) => el.includes(".txt"))
    .map((el) => el.replace(".txt", ""));

  const fileNames = {
    back_query: "backend",
    front_query: "frontend",
    cs_query: "computer_science",
    pers_query: "personal",
    fund_query: "fundaments",
    uol_query: "uol",
  };
  for (const file of files) {
    await writeFile(file, fileNames[file]);
  }
};

main();
