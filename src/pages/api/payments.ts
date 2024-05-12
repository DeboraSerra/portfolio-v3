import PaymentController from "@/backend/controller/payments.controller";
import { NextApiRequest, NextApiResponse } from "next";

export default async function paymentRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      return await PaymentController.createPayment(req, res);
    case "GET":
      if (req.body.id) return await PaymentController.getPaymentById(req, res);
      return await PaymentController.getAllPayments(req, res);
    case "PUT":
      return await PaymentController.updatePayment(req, res);
    case "DELETE":
      return await PaymentController.deletePayment(req, res);
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
