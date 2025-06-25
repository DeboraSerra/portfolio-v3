import { InvoiceWithId } from "@/backend/interfaces/invoices";
import { ProjectsContext } from "@/helpers/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as S from "./InvoiceForm.styled";

const InvoiceForm = () => {
  const {
    user: { id },
    setInvoices,
    invoices,
    invoiceToEdit,
    setInvoiceToEdit,
  } = useContext(ProjectsContext);
  const [form, setForm] = useState({
    client: "",
    value: 0.0,
    date: "",
    currency: "BRL",
  });
  const [host, setHost] = useState("");
  const { client, value, date } = form;

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  useEffect(() => {
    if (invoiceToEdit) {
      setForm({
        client: (invoiceToEdit as any).client,
        value: +(invoiceToEdit as any).value_received,
        date: (invoiceToEdit as any).date_received,
        currency: (invoiceToEdit as any).currency || "BRL",
      });
    } else {
      setForm({
        client: "",
        value: 0.0,
        date: "",
        currency: "BRL",
      });
    }
  }, [invoiceToEdit]);

  const formatValue = (value: number) => {
    return value.toLocaleString(form.currency === "BRL" ? "pt-BR" : "en-CA", {
      style: "currency",
      currency: form.currency,
    });
  };

  const validateValue = (value: string) => {
    value = value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      const realValue = numericValue / 100;
      const formattedCurrency = formatValue(realValue);

      return formattedCurrency;
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    if (e.target.name === "value") {
      value = validateValue(value);
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valueReceived = form.value.toString().replace(/[^0-9.,]/g, "");
    const info = {
      client,
      value_received:
        form.currency === "BRL"
          ? valueReceived.replace(".", "").replace(",", ".")
          : valueReceived.replace(",", ""),
      date_received: new Date(date).toISOString().split("T")[0],
      currency: form.currency,
      user_id: id,
    };
    if (invoiceToEdit) {
      (info as InvoiceWithId).id = (invoiceToEdit as InvoiceWithId).id;
    }
    const url = `${host}/api/invoice?user_id=${id}`;
    const { data } = await (invoiceToEdit
      ? axios.put(url, info)
      : axios.post(url, info));
    !invoiceToEdit && setInvoices([...invoices, data.invoice]);
    setInvoiceToEdit(null);
    setForm({
      client: "",
      value: 0.0,
      date: "",
      currency: "BRL",
    });
  };

  return (
    <S.Main
      action={`${host}/api/invoice`}
      method='post'
      className='control__form'
      onSubmit={handleSubmit}
    >
      <legend className='control__form--title'>Add new invoice</legend>
      <div className='control__form--fields'>
        <label htmlFor='client' className='control__form--label'>
          Client name
          <input
            onChange={handleChange}
            value={client}
            type='text'
            id='client'
            name='client'
            className='control__form--input'
          />
        </label>
        <div className='control__form--currency'>
          <p className='control__form--label'>Currency</p>
          <label htmlFor='real' className='control__form--currency-label'>
            <input
              type='radio'
              name='currency'
              id='real'
              value='BRL'
              checked={form.currency === "BRL"}
              className='control__form--currency-input'
              onChange={handleChange}
            />
            R$
          </label>
          <label htmlFor='dollar' className='control__form--currency-label'>
            <input
              type='radio'
              name='currency'
              id='dollar'
              value='CAD'
              className='control__form--currency-input'
              onChange={handleChange}
              checked={form.currency === "CAD"}
            />
            $
          </label>
        </div>
        <label htmlFor='value' className='control__form--label'>
          Value received
          <input
            onChange={handleChange}
            value={formatValue(value)}
            type='text'
            name='value'
            id='value'
            className='control__form--input'
          />
        </label>
        <label htmlFor='date' className='control__form--label'>
          Date received
          <input
            onChange={handleChange}
            value={date}
            type='date'
            id='date'
            name='date'
            className='control__form--input'
          />
        </label>
        <button type='submit' className='control__form--btn'>
          Add payment
        </button>
      </div>
    </S.Main>
  );
};

export default InvoiceForm;
