import { ProjectsContext } from "@/helpers/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as S from "./PaymentForm.styled";
import { Payment, PaymentWithId } from "@/backend/interfaces/payments";

// const HOME_URL = process.env.NEXT_PUBLIC_HOME_URL ?? "http://localhost:3000";

const PaymentForm = () => {
  const {
    user: { id },
    setPayments,
    payments,
    paymentToEdit,
    setPaymentToEdit,
  } = useContext(ProjectsContext);
  const [form, setForm] = useState({
    value: 0.0,
    date: "",
    payed: false,
  });
  const [host, setHost] = useState("");
  const { payed, value, date } = form;

  useEffect(() => {
    setHost(window.location.origin);
  }, []);

  useEffect(() => {
    if (paymentToEdit) {
      setForm({
        value: +(paymentToEdit as PaymentWithId).value,
        date: (paymentToEdit as PaymentWithId).date ?? "",
        payed: (paymentToEdit as PaymentWithId).payed,
      });
    } else {
      setForm({
        value: 0.0,
        date: "",
        payed: false,
      });
    }
  }, [paymentToEdit]);

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
    if (e.target.name === "payed") {
      value = e.target.checked as any;
      e.target.checked === false && setForm({ ...form, date: "" });
    }
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info = {
      payed,
      value: value
        .toString()
        .replace(/\D\W\s{1,}/g, "")
        .replace(".", "")
        .replace(",", "."),
      date: date ? new Date(date).toISOString().split("T")[0] : null,
      user_id: id,
    };
    if (paymentToEdit) {
      (info as PaymentWithId).id = (paymentToEdit as PaymentWithId).id;
    }
    const url = `${host}/api/payments?user_id=${id}`;
    const { data } = await (paymentToEdit
      ? axios.put(url, info)
      : axios.post(url, info));
    !paymentToEdit && setPayments([...payments, data.payment]);
    setPaymentToEdit(null);
    setForm({
      value: 0.0,
      date: "",
      payed: false,
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
        <label htmlFor='value' className='control__form--label'>
          Value payed
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
        <label htmlFor='check' className='control__form--check'>
          Payed
          <input
            type='checkbox'
            name='payed'
            id='check'
            checked={payed}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='date' className='control__form--label'>
          Date of payment
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

export default PaymentForm;
