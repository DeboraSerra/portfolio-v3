import { sql } from "@vercel/postgres";
import fs from "fs/promises";
import { Invoice, InvoiceWithId } from "../interfaces/invoices";

const validateUser = async (user_id: number) => {
  const { rows: [user] } = await sql`SELECT * FROM users WHERE id = ${user_id}`;
  if (!user) {
    return { error: true, message: "User not found", invoice: {} };
  }
  return user;
};

const InvoiceModel = {
  createInvoice: async ({
    client,
    date_received,
    user_id,
    value_received,
  }: Invoice) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `INSERT INTO payments (user_id, value_received, date_received, client) VALUES ('${user_id}', '${value_received}', '${date_received}', '${client}') returning id`;
    const {
      rows: [insertId],
    } = await sql.query(query);
    return {
      invoice: { id: insertId, client, date_received, user_id, value_received },
      error: false,
      message: "",
    };
  },
  getAllInvoices: async (user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM payments WHERE user_id = ${user_id}`;
    const { rows: invoices } = await sql.query(query);
    return { invoice: invoices, error: false, message: "" };
  },
  getInvoiceById: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM payments WHERE id = ${id} AND user_id = ${user_id}`;
    const {
      rows: [invoice],
    } = await sql.query(query);
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
    const query = `UPDATE payments SET client = '${client}', date_received = '${date_received}', value_received = ${value_received} WHERE id = ${id} AND user_id = ${user_id} returning *`;
    const {
      rows: [invoice],
    } = await sql.query(query);
    if (!invoice) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    return { invoice, error: false, message: "" };
  },
  deleteInvoice: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `DELETE FROM payments WHERE id = ${id} AND user_id = ${user_id} returning id`;
    const {
      rows: [affectedRows],
    } = await sql.query(query);
    if (!affectedRows) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
        invoice: {},
      };
    }
    return { error: false, message: "Invoice deleted", invoice: {} };
  },
};

export default InvoiceModel;
