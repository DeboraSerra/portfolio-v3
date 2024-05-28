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
      });
    } else {
      setForm({
        client: "",
        value: 0.0,
        date: "",
      });
    }
  }, [invoiceToEdit]);

  const validateValue = (value: string) => {
    value = value.replace(/[^0-9]/g, "");
    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      const realValue = numericValue / 100;
      const formattedCurrency = realValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

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
    const info = {
      client,
      value_received: value
        .toString()
        .replace(/\D\W\s{1,}/g, "")
        .replace(".", "")
        .replace(",", "."),
      date_received: new Date(date).toISOString().split("T")[0],
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
        <label htmlFor='value' className='control__form--label'>
          Value received
          <input
            onChange={handleChange}
            value={value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
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
