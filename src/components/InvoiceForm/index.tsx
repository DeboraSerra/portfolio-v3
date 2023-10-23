import { useState } from "react";
import * as S from "./InvoiceForm.styled";

const InvoiceForm = () => {
  const [form, setForm] = useState({
    client: "",
    value: 0.0,
    date: "",
  });
  const { client, value, date } = form;

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
      console.log({ value })
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  return (
    <S.Main action='/api/invoice' method='post' className='control__form'>
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
