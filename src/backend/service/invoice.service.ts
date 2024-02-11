import z from "zod";
import { Invoice, InvoiceWithId, ServiceReturn } from "../interfaces/invoices";
import InvoiceModel from "../model/invoice.model";
import { randomUUID } from "crypto";

const invoiceSchema = z.object({
  user_id: z.number(),
  client: z.string(),
  value_received: z.string().regex(/^\d+(\.\d{2})?$/),
  date_received: z
    .string()
    .refine((date) => new Date(date).getTime() <= Date.now(), {
      message: "Date can't be in the future",
    }),
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
    return addedInvoice as ServiceReturn;
  },
  getAllInvoices: async (user_id: number) => {
    const invoice = await InvoiceModel.getAllInvoices(user_id);
    return invoice as ServiceReturn;
  },
  getInvoiceById: async (id: number, user_id: number) => {
    const invoice = await InvoiceModel.getInvoiceById(id, user_id);
    return invoice as ServiceReturn;
  },
  updateInvoice: async (invoice: InvoiceWithId) => {
    const { user_id, client, value_received, date_received } =
      invoiceSchema.parse(invoice);
    const updatedInvoice = await InvoiceModel.updateInvoice({
      id: invoice.id,
      user_id,
      client,
      value_received,
      date_received,
    });
    return updatedInvoice as ServiceReturn;
  },
  deleteInvoice: async (id: number, user_id: number) => {
    const { user_id: userId } = invoiceSchema.parse({ user_id });
    const deletedInvoice = await InvoiceModel.deleteInvoice(id, userId);
    return deletedInvoice as ServiceReturn;
  },
};

export default InvoiceService;
