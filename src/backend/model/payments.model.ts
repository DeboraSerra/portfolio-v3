import { sql } from "@vercel/postgres";
import { Payment, PaymentWithId } from "../interfaces/payments";

const validateUser = async (user_id: number) => {
  const {
    rows: [user],
  } = await sql`SELECT * FROM users WHERE id = ${user_id}`;
  if (!user) {
    return { error: true, message: "User not found", invoice: {} };
  }
  return user;
};

const PaymentModel = {
  createPayment: async ({ date, payed, user_id, value }: Payment) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    let query = `INSERT INTO trybe_payments (user_id, value, payed, date) VALUES ('${user_id}', '${value}', '${payed}', '${date}') returning id`;
    if (!date) {
      query = `INSERT INTO trybe_payments (user_id, value, payed) VALUES ('${user_id}', '${value}', '${payed}') returning id`;
    }
    const {
      rows: [insertId],
    } = await sql.query(query);
    return {
      payment: { id: insertId, payed, date, user_id, value },
      error: false,
      message: "",
    };
  },
  getAllPayments: async (user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM trybe_payments WHERE user_id = ${user_id}`;
    const { rows: payments } = await sql.query(query);
    return { payment: payments, error: false, message: "" };
  },
  getPaymentById: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `SELECT * FROM trybe_payments WHERE id = ${id} AND user_id = ${user_id}`;
    const {
      rows: [payment],
    } = await sql.query(query);
    if (!payment) {
      return {
        error: true,
        message: "Action not allowed or payment not found",
        payment: {},
      };
    }
    return { payment, error: false, message: "" };
  },
  updatePayment: async ({ id, user_id, payed, date, value }: PaymentWithId) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    let query = `UPDATE trybe_payments SET payed = ${payed}, date = '${date}', value = '${value}' WHERE id = ${id} AND user_id = ${user_id} returning *`;
    if (!date) {
      query = `UPDATE trybe_payments SET payed = ${payed}, value = '${value}' WHERE id = ${id} AND user_id = ${user_id} returning *`;
    }
    const {
      rows: [payment],
    } = await sql.query(query);
    if (!payment) {
      return {
        error: true,
        message: "Action not allowed or payment not found",
        payment: {},
      };
    }
    return { payment, error: false, message: "" };
  },
  deletePayment: async (id: number, user_id: number) => {
    const user = validateUser(user_id);
    if ("error" in user) return user;
    const query = `DELETE FROM trybe_payments WHERE id = ${id} AND user_id = ${user_id} returning id`;
    const {
      rows: [affectedRows],
    } = await sql.query(query);
    if (!affectedRows) {
      return {
        error: true,
        message: "Action not allowed or payment not found",
        payment: {},
      };
    }
    return { error: false, message: "Payment deleted", payment: {} };
  },
};

export default PaymentModel;
