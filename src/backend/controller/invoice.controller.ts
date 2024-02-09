import { NextApiRequest, NextApiResponse } from "next";
import InvoiceService from "../service/invoice.service";

const InvoiceController = {
  createInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const { invoice, error, message } = await InvoiceService.createInvoice(
      req.body
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(201).json({ invoice });
  },
  getAllInvoices: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { invoice, error, message } = await InvoiceService.getAllInvoices(
      Number(user_id)
    );
    console.log({ invoice, error, message })
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ invoice });
  },
  getInvoiceById: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { id } = req.body;
    const { invoice, error, message } = await InvoiceService.getInvoiceById(
      Number(id),
      Number(user_id)
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ invoice });
  },
  updateInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const { invoice, error, message } = await InvoiceService.updateInvoice(
      req.body
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(200).json({ invoice });
  },
  deleteInvoice: async (req: NextApiRequest, res: NextApiResponse) => {
    const { user_id } = req.query;
    const { id } = req.body;
    const { error, message, invoice } = await InvoiceService.deleteInvoice(
      Number(id),
      Number(user_id)
    );
    if (error) {
      return res.status(400).json({ error, message });
    }
    return res.status(300).end();
  },
};

export default InvoiceController;
