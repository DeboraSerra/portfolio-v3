import { NextApiRequest, NextApiResponse } from "next";
import PaymentService from "../service/payment.service";

const PaymentController = {
  createPayment: async (req: NextApiRequest, res: NextApiResponse) => {
    const { payment, error, message } = await PaymentService.createPayment(
      req.body
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(201).json({ payment });
  },
  getAllPayments: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { payment, error, message } = await PaymentService.getAllPayments(
      Number(user_id)
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ payment });
  },
  getPaymentById: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { id } = req.body;
    const { payment, error, message } = await PaymentService.getPaymentById(
      Number(id),
      Number(user_id)
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ payment });
  },
  updatePayment: async (req: NextApiRequest, res: NextApiResponse) => {
    const { payment, error, message } = await PaymentService.updatePayment(
      req.body
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ payment });
  },
  deletePayment: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id, id } = req.query;
    const { error, message, payment } = await PaymentService.deletePayment(
      Number(id),
      Number(user_id)
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(300).end();
  },
};

export default PaymentController;
