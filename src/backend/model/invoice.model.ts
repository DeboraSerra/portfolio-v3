import { ResultSetHeader, RowDataPacket } from "mysql2";
import conn from "../connection/connection";
import { Invoice, InvoiceWithId } from "../interfaces/invoices";

const validateUser = async (user_id: number) => {
  const query = `SELECT name FROM users WHERE id = ?`;
  const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
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
    const query = `INSERT INTO payments (user_id, value_received, date_received, client) VALUES (?, ?,?,?)`;
    const [{ insertId }] = await conn.execute<ResultSetHeader>(query, [
      user_id,
      value_received,
      date_received,
      client,
    ]);
    return {
      invoice: { id: insertId, client, date_received, user_id, value_received },
      error: false,
      message: "",
    };
  },
  getAllInvoices: async (user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM payments WHERE user_id = ?`;
    const [invoices] = await conn.execute<RowDataPacket[][]>(query, [
      user_id,
    ]);
    return { invoice: invoices, error: false, message: "" };
  },
  getInvoiceById: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM payments WHERE id = ? AND user_id = ?`;
    const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
      id,
      user_id,
    ]);
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
    const query = `UPDATE payments SET client = ?, date_received = ?, value_received = ? WHERE id = ? AND user_id = ?`;
    const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
      client,
      date_received,
      value_received,
      id,
      user_id,
    ]);
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
    const query = `DELETE FROM payments WHERE id = ? AND user_id = ?`;
    const [{ affectedRows }] = await conn.execute<ResultSetHeader>(query, [
      id,
      user_id,
    ]);
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
