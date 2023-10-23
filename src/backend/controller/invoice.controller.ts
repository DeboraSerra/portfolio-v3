import { NextApiRequest, NextApiResponse } from "next";
import InvoiceService from "../service/invoice.service";

const InvoiceController = {
  createInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const addedInvoice = await InvoiceService.createInvoice(req.body);
    if ("error" in addedInvoice) {
      return res.status(400).json(addedInvoice);
    }
    return res.status(201).json(addedInvoice);
  },
  getAllInvoices: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const invoices = await InvoiceService.getAllInvoices(Number(user_id));
    if ("error" in invoices) {
      return res.status(400).json(invoices);
    }
    return res.status(200).json(invoices);
  },
  getInvoiceById: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { id } = req.body;
    const invoice = await InvoiceService.getInvoiceById(
      Number(id),
      Number(user_id)
    );
    if ("error" in invoice) {
      return res.status(400).json(invoice);
    }
    return res.status(200).json(invoice);
  },
  updateInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const updatedInvoice = await InvoiceService.updateInvoice(req.body);
    if ("error" in updatedInvoice) {
      return res.status(400).json(updatedInvoice);
    }
    return res.status(200).json(updatedInvoice);
  },
  deleteInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { id } = req.body;
    const deletedInvoice = await InvoiceService.deleteInvoice(
      Number(id),
      Number(user_id)
    );
    if ("error" in deletedInvoice) {
      return res.status(400).json(deletedInvoice);
    }
    return res.status(200).json(deletedInvoice);
  },
};

export default InvoiceController;
