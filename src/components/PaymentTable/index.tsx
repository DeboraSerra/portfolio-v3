/* eslint-disable react-hooks/exhaustive-deps */
import { ProjectsContext } from "@/helpers/Context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  BiChevronDown,
  BiChevronUp,
  BiEdit,
  BiRefresh,
  BiTrash,
} from "react-icons/bi";
import * as S from "./PaymentTable.styled";

enum Months {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

const PaymentTable = () => {
  const {
    payments,
    getPayments,
    user: { id },
    editPayment,
    setPaymentToEdit,
    setPayments,
  } = useContext(ProjectsContext);
  const [filteredPayments, setFilteredPayments] = useState(payments);
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByValue, setSortByValue] = useState(false);
  const [sortByPayed, setSortByPayed] = useState(false);

  useEffect(() => {
    id && getPayments();
  }, [id]);

  useEffect(() => {
    setFilteredPayments(payments);
  }, [payments]);

  const transformValue = (value: string) => {
    const valueAsNumber = parseFloat(value);
    const formattedValue = valueAsNumber.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };

  const handleSortByDate = () => {
    setSortByDate(!sortByDate);
    setSortByValue(false);
    setSortByPayed(false);
    setFilteredPayments(
      filteredPayments.sort((a: any, b: any) => {
        if (sortByDate) {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    );
  };

  const handleSortByValue = () => {
    setSortByValue(!sortByValue);
    setSortByDate(false);
    setSortByPayed(false);
    setFilteredPayments(
      filteredPayments.sort((a: any, b: any) => {
        if (sortByValue) {
          return a.value - b.value;
        }
        return b.value - a.value;
      })
    );
  };

  const handleSortByPayed = () => {
    setSortByPayed(!sortByPayed);
    setSortByValue(false);
    setSortByDate(false);
    setFilteredPayments([
      ...filteredPayments.filter((invoice: any) =>
        sortByPayed ? invoice.payed : !invoice.payed
      ),
      ...filteredPayments.filter((invoice: any) =>
        sortByPayed ? !invoice.payed : invoice.payed
      ),
    ]);
  };

  const handleCheck = ({
    id,
    checked,
    value,
    date,
  }: {
    id: number;
    checked: boolean;
    value: string;
    date: string;
  }) => {
    editPayment({ id, payed: checked, value, date });
  };

  const handleFilterBtn = (period: "preview" | "current") => {
    const filtered = payments.filter((payment: any) => {
      const date = new Date(payment.date);
      if (period === "current") {
        return date.getFullYear() === new Date().getFullYear();
      } else {
        return date.getFullYear() < new Date().getFullYear();
      }
    });
    setFilteredPayments(filtered);
  };

  const handleDelete = async (paymentId: number) => {
    const { data } = await axios.delete(
      `/api/payments?user_id=${id}&id=${paymentId}`
    );
    if ("error" in data) {
      console.error(data.error);
    } else {
      const newPayments = payments.filter(
        (payment) => (payment as any).id !== paymentId
      );
      setPayments(newPayments as any);
    }
  };

  return (
    <S.Main>
      <div className='payment__filter'>
        <button
          className='payment__filter--btn'
          onClick={() => handleFilterBtn("preview")}
        >
          Previews years
        </button>
        <button
          className='payment__filter--btn'
          onClick={() => handleFilterBtn("current")}
        >
          Current year
        </button>
        <button
          className='payment__filter--btn'
          onClick={() => setFilteredPayments(payments)}
        >
          Clear filters
        </button>
        <button
          className='btn'
          title='Refresh table'
          onClick={getPayments}
        >
          <BiRefresh className="refresh-icon" />
        </button>
      </div>
      <li className='payment__header'>
        <h2 className='payment__header--column' onClick={handleSortByValue}>
          Value {sortByValue ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
        <h2 className='payment__header--column' onClick={handleSortByDate}>
          Date {sortByDate ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
        <h2 className='payment__header--column' onClick={handleSortByPayed}>
          Payed {sortByPayed ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
        <h2 className='payment__header--column button'>Edit</h2>
        <h2 className='payment__header--column button'>Delete</h2>
      </li>
      {filteredPayments?.map(
        (payment: {
          id: number;
          date: string;
          value: string;
          payed: boolean;
        }) => (
          <li className='payment__item' key={payment.id}>
            <p className='payment__item--column'>
              {transformValue(payment.value)}
            </p>
            <p className='payment__item--column'>
              {payment.date
                ? new Date(payment.date).toLocaleDateString()
                : "To be payed"}
            </p>
            <label htmlFor='check' className='payment__item--column check'>
              <input
                type='checkbox'
                name='payed'
                id='check'
                checked={payment.payed}
                onChange={() => {
                  handleCheck({
                    id: payment.id,
                    checked: !payment.payed,
                    value: String(payment.value),
                    date: payment.date,
                  });
                }}
              />
            </label>
            <button
              className='payment__item--column button'
              onClick={() => setPaymentToEdit({ ...payment, user_id: id })}
            >
              <BiEdit className='icon' />
            </button>
            <button
              className='payment__item--column button'
              onClick={() => handleDelete(payment.id)}
            >
              <BiTrash />
            </button>
          </li>
        )
      )}
      <li className='payment__total'>
        <p className='payment__total--label'>Total</p>
        <p className='payment__total--value'>
          {filteredPayments
            ? transformValue(
                filteredPayments
                  .reduce(
                    (acc: number, curr: any) => acc + parseFloat(curr.value),
                    0
                  )
                  .toString()
              )
            : 0}
        </p>
      </li>
      <li className='payment__total'>
        <p className='payment__total--label'>Course total</p>
        <p className='payment__total--value'>{transformValue("39587.26")}</p>
      </li>
      <li className='payment__total'>
        <p className='payment__total--label'>Left to be payed</p>
        <p className='payment__total--value'>
          {transformValue(
            (
              39587.26 -
              payments
                .filter(({ payed }) => Boolean(payed))
                .reduce(
                  (acc: number, curr: any) => acc + parseFloat(curr.value),
                  0
                )
            ).toString()
          )}
        </p>
      </li>
    </S.Main>
  );
};

export default PaymentTable;
