import z from "zod";
import { Payment, PaymentWithId, ServiceReturn } from "../interfaces/payments";
import PaymentModel from "../model/payments.model";

const paymentSchema = z.object({
  user_id: z.number({ required_error: "User id is required" }),
  payed: z.boolean().default(() => false),
  value: z
    .string({ required_error: "The value to be payed is required" })
    .regex(/^\d+(\.\d{2})?$/),
  date: z.string().nullable().default(() => null),
});

const deleteSchema = z.object({
  user_id: z.number({ required_error: "User id is required" }),
});

const PaymentService = {
  createPayment: async (payment: Payment) => {
    const { user_id, date, payed, value } = paymentSchema.parse(payment);
    const addedPayment = await PaymentModel.createPayment({
      user_id,
      payed,
      value,
      date,
    });
    return addedPayment as ServiceReturn;
  },
  getAllPayments: async (user_id: number) => {
    const payment = await PaymentModel.getAllPayments(user_id);
    return payment as ServiceReturn;
  },
  getPaymentById: async (id: number, user_id: number) => {
    const payment = await PaymentModel.getPaymentById(id, user_id);
    return payment as ServiceReturn;
  },
  updatePayment: async (payment: PaymentWithId) => {
    const { user_id, date, payed, value } = paymentSchema.parse(payment);
    const updatedPayment = await PaymentModel.updatePayment({
      id: payment.id,
      user_id,
      payed,
      value,
      date,
    });
    return updatedPayment as ServiceReturn;
  },
  deletePayment: async (id: number, user_id: number) => {
    const { user_id: userId } = deleteSchema.parse({ user_id });
    const deletedPayment = await PaymentModel.deletePayment(id, userId);
    return deletedPayment as ServiceReturn;
  },
};

export default PaymentService;
