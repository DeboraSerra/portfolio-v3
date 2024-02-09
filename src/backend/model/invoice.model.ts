import { dbPath } from "@/helpers";
import { randomUUID } from "crypto";
import fs from "fs/promises";
import { join } from "path";
import { Invoice, InvoiceWithId } from "../interfaces/invoices";

const validateUser = async (user_id: number) => {
  const users = JSON.parse(
    await fs.readFile("src/backend/db/login.json", {
      encoding: "utf-8",
      flag: "r",
    })
  );
  const user = users.find((user: { id: number }) => user.id === user_id);
  if (!user) {
    return { error: true, message: "User not found", invoice: {} };
  }
  return user;
};

// const InvoiceModel = {
//   createInvoice: async ({
//     client,
//     date_received,
//     user_id,
//     value_received,
//   }: Invoice) => {
//     const user = validateUser(user_id);
//     if ("error" in user) return user;
//     const query = `INSERT INTO payments (user_id, value_received, date_received, client) VALUES (?, ?,?,?)`;
//     const [{ insertId }] = await conn.execute<ResultSetHeader>(query, [
//       user_id,
//       value_received,
//       date_received,
//       client,
//     ]);
//     return {
//       invoice: { id: insertId, client, date_received, user_id, value_received },
//       error: false,
//       message: "",
//     };
//   },
//   getAllInvoices: async (user_id: number) => {
//     const user = validateUser(user_id);
//     if ("error" in user) return user;
//     const query = `SELECT * FROM payments WHERE user_id = ?`;
//     const [invoices] = await conn.execute<RowDataPacket[][]>(query, [
//       user_id,
//     ]);
//     return { invoice: invoices, error: false, message: "" };
//   },
//   getInvoiceById: async (id: number, user_id: number) => {
//     const user = validateUser(user_id);
//     if ("error" in user) return user;
//     const query = `SELECT * FROM payments WHERE id = ? AND user_id = ?`;
//     const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
//       id,
//       user_id,
//     ]);
//     if (!invoice) {
//       return {
//         error: true,
//         message: "Action not allowed or invoice not found",
//         invoice: {},
//       };
//     }
//     return { invoice, error: false, message: "" };
//   },
//   updateInvoice: async ({
//     client,
//     date_received,
//     id,
//     user_id,
//     value_received,
//   }: InvoiceWithId) => {
//     const user = validateUser(user_id);
//     if ("error" in user) return user;
//     const query = `UPDATE payments SET client = ?, date_received = ?, value_received = ? WHERE id = ? AND user_id = ?`;
//     const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
//       client,
//       date_received,
//       value_received,
//       id,
//       user_id,
//     ]);
//     if (!invoice) {
//       return {
//         error: true,
//         message: "Action not allowed or invoice not found",
//         invoice: {},
//       };
//     }
//     return { invoice, error: false, message: "" };
//   },
//   deleteInvoice: async (id: number, user_id: number) => {
//     const user = validateUser(user_id);
//     if ("error" in user) return user;
//     const query = `DELETE FROM payments WHERE id = ? AND user_id = ?`;
//     const [{ affectedRows }] = await conn.execute<ResultSetHeader>(query, [
//       id,
//       user_id,
//     ]);
//     if (!affectedRows) {
//       return {
//         error: true,
//         message: "Action not allowed or invoice not found",
//         invoice: {},
//       };
//     }
//     return { error: false, message: "Invoice deleted", invoice: {} };
//   },
// };

const InvoiceModel = {
  createInvoice: async ({
    client,
    date_received,
    user_id,
    value_received,
  }: Invoice) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const id = randomUUID();
    const invoice = { id, client, date_received, user_id, value_received };
    const exists = (await fs.readdir(join(dbPath, "invoices"))).find(
      (file) => file === `${user_id}.json`
    );
    if (!exists) {
      await fs.writeFile(
        join(dbPath, "invoices", `${user_id}.json`),
        JSON.stringify([invoice])
      );
      return {
        invoice,
        error: false,
        message: "",
      };
    }
    const invoices = JSON.parse(
      await fs.readFile(join(dbPath, "invoices", `${user_id}.json`), {
        encoding: "utf-8",
        flag: "r",
      })
    );
    invoices.push(invoice);
    await fs.writeFile(
      join(dbPath, "invoices", `${user_id}.json`),
      JSON.stringify(invoices)
    );
    return {
      invoice,
      error: false,
      message: "",
    };
  },
  getAllInvoices: async (user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const exists = (
      await fs.readdir(join(dbPath, "invoices", `${user_id}.json`))
    ).find((file) => file === `${user_id}.json`);
    if (!exists) {
      return {
        invoice: [],
        error: false,
        message: "",
      };
    }
    const invoices = await fs.readFile(
      join(dbPath, "invoices", `${user_id}.json`),
      { encoding: "utf-8", flag: "r" }
    );
    return {
      invoice: JSON.parse(invoices),
      error: false,
      message: "",
    };
  },
  getInvoiceById: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const exists = (await fs.readdir(join(dbPath, "invoices"))).find(
      (file) => file === `${user_id}.json`
    );
    if (!exists) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    const invoices = await fs.readFile(
      join(dbPath, "invoices", `${user_id}.json`),
      { encoding: "utf-8", flag: "r" }
    );
    const invoice = JSON.parse(invoices).find(
      (invoice: { id: number }) => invoice.id === id
    );
    if (!invoice) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    return { invoice, error: false, message: "" };
  },
  updateInvoice: async ({
    client,
    date_received,
    id,
    user_id,
    value_received,
  }: InvoiceWithId) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const invoices = JSON.parse(
      await fs.readFile(join(dbPath, "invoices", `${user_id}.json`), {
        encoding: "utf-8",
        flag: "r",
      })
    );
    const index = invoices.findIndex(
      (invoice: { id: number }) => invoice.id === id
    );
    if (index === -1) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    invoices[index] = { id, client, date_received, user_id, value_received };
    await fs.writeFile(
      join(dbPath, "invoices", `${user_id}.json`),
      JSON.stringify(invoices)
    );
    return { invoice: invoices[index], error: false, message: "" };
  },
  deleteInvoice: async (id: typeof randomUUID, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const invoices = await fs.readFile(
      join(dbPath, "invoices", `${user_id}.json`),
      { encoding: "utf-8", flag: "r" }
    );
    const parsed = JSON.parse(invoices);
    const index = parsed.findIndex(
      (invoice: { id: typeof randomUUID }) => invoice.id === id
    );
    if (index === -1) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    const filtered = parsed.filter(
      (invoice: { id: typeof randomUUID }) => invoice.id !== id
    );
    await fs.writeFile(
      join(dbPath, "invoices", `${user_id}.json`),
      JSON.stringify(filtered)
    );
    return { error: false, message: "Invoice deleted", invoice: {} };
  },
};

export default InvoiceModel;
