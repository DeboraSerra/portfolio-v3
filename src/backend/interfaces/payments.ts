interface Id {
  id: number;
}

export interface Payment {
  user_id: number;
  value: string;
  payed: boolean;
  date?: string | null;
}

export interface PaymentWithId extends Payment, Id {}

export interface ServiceReturn {
  payment: PaymentWithId;
  error: boolean;
  message: string;
}
