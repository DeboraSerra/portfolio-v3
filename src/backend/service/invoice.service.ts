import z from "zod";
import { Invoice, InvoiceWithId } from "../interfaces/invoices";
import InvoiceModel from "../model/invoice.model";

const invoiceSchema = z.object({
  user_id: z.number(),
  client: z.string(),
  value_received: z.string().regex(/^\d+(\.\d{2})?$/),
  date_received: z.string().refine((date) => new Date(date).getTime() <= Date.now(), {
    message: "Date can't be in the future",
  }),
});

const idSchema = z.object({
  id: z.number(),
});

const InvoiceService = {
  createInvoice: async (invoice: Invoice) => {
    const { user_id, client, value_received, date_received } =
      invoiceSchema.parse(invoice);
    const addedInvoice = await InvoiceModel.createInvoice({
      user_id,
      client,
      value_received,
      date_received,
    });
    return addedInvoice;
  },
  getAllInvoices: async (user_id: number) => {
    const invoices = InvoiceModel.getAllInvoices(user_id);
    return invoices;
  },
  getInvoiceById: async (id: number, user_id: number) => {
    const { id: idInvoice } = idSchema.parse({ id });
    const invoice = await InvoiceModel.getInvoiceById(idInvoice, user_id);
    return invoice;
  },
  updateInvoice: async (invoice: InvoiceWithId) => {
    const { user_id, client, value_received, date_received } =
      invoiceSchema.parse(invoice);
    const { id } = idSchema.parse(invoice);
    const updatedInvoice = await InvoiceModel.updateInvoice({
      id,
      user_id,
      client,
      value_received,
      date_received,
    });
    return updatedInvoice;
  },
  deleteInvoice: async (id: number, user_id: number) => {
    const { id: idInvoice } = idSchema.parse({ id });
    const { user_id: userId } = invoiceSchema.parse({ user_id });
    const deletedInvoice = await InvoiceModel.deleteInvoice(idInvoice, userId);
    return deletedInvoice;
  },
};

export default InvoiceService;
