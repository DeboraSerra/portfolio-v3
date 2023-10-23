import InvoiceController from "@/backend/controller/invoice.controller";
import { NextApiRequest, NextApiResponse } from "next";

export default async function invoiceRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      return await InvoiceController.createInvoice(req, res);
    case "GET":
      if (req.body.id) return await InvoiceController.getInvoiceById(req, res);
      return await InvoiceController.getAllInvoices(req, res);
    case "PUT":
      return await InvoiceController.updateInvoice(req, res);
    case "DELETE":
      return await InvoiceController.deleteInvoice(req, res);
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
