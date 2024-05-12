interface Id {
  id: number;
}

export interface Invoice {
  user_id: number;
  client: string;
  value_received: string;
  date_received: string;
}

export interface InvoiceWithId extends Invoice, Id {}

export interface ServiceReturn {
  invoice: InvoiceWithId;
  error: boolean;
  message: string;
}
