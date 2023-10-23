import { ResultSetHeader, RowDataPacket } from "mysql2";
import conn from "../connection/connection";
import { Invoice, InvoiceWithId } from "../interfaces/invoices";

const InvoiceModel = {
  createInvoice: async ({
    client,
    date_received,
    user_id,
    value_received,
  }: Invoice) => {
    let query = `SELECT name FROM users WHERE id = ?`;
    const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
    if (!user) {
      return { error: true, message: "User not found" };
    }
    query = `INSERT INTO payments (user_id, value_received, date_received, client) VALUES (?, ?,?,?)`;
    const [{ insertId }] = await conn.execute<ResultSetHeader>(query, [
      user_id,
      value_received,
      date_received,
      client,
    ]);
    return { id: insertId, client, date_received, user_id, value_received };
  },
  getAllInvoices: async (user_id: number) => {
    let query = `SELECT name FROM users WHERE id = ?`;
    const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
    if (!user) {
      return { error: true, message: "User not found" };
    }
    query = `SELECT * FROM payments WHERE user_id = ?`;
    const [[invoices]] = await conn.execute<RowDataPacket[][]>(query, [
      user_id,
    ]);
    return invoices;
  },
  getInvoiceById: async (id: number, user_id: number) => {
    let query = `SELECT name FROM users WHERE id = ?`;
    const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
    if (!user) {
      return { error: true, message: "User not found" };
    }
    query = `SELECT * FROM payments WHERE id = ? AND user_id = ?`;
    const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
      id,
      user_id,
    ]);
    if (!invoice) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
      };
    }
    return invoice;
  },
  updateInvoice: async ({
    client,
    date_received,
    id,
    user_id,
    value_received,
  }: InvoiceWithId) => {
    let query = `SELECT name FROM users WHERE id = ?`;
    const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
    if (!user) {
      return { error: true, message: "User not found" };
    }
    query = `UPDATE payments SET client = ?, date_received = ?, value_received = ? WHERE id = ? AND user_id = ?`;
    const [[invoice]] = await conn.execute<RowDataPacket[][]>(query, [
      id,
      user_id,
    ]);
    if (!invoice) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
      };
    }
    return invoice;
  },
  deleteInvoice: async (id: number, user_id: number) => {
    let query = `SELECT name FROM users WHERE id = ?`;
    const [[user]] = await conn.execute<RowDataPacket[][]>(query, [user_id]);
    if (!user) {
      return { error: true, message: "User not found" };
    }
    query = `DELETE FROM payments WHERE id = ? AND user_id = ?`;
    const [{ affectedRows }] = await conn.execute<ResultSetHeader>(query, [
      id,
      user_id,
    ]);
    if (!affectedRows) {
      return {
        error: true,
        message: "Action not allowed or invoice not found",
      };
    }
    return { id };
  },
};

export default InvoiceModel;
