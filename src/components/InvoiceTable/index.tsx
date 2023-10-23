import { ProjectsContext } from "@/helpers/Context";
import { useContext, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import * as S from "./InvoiceTable.styled";

const InvoiceTable = () => {
  const { invoices, setInvoices } = useContext(ProjectsContext);
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByValue, setSortByValue] = useState(false);
  const [sortByClient, setSortByClient] = useState(false);

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
    setSortByClient(false);
    setInvoices(
      invoices.sort((a: any, b: any) => {
        if (sortByDate) {
          return (
            new Date(a.date_received).getTime() -
            new Date(b.date_received).getTime()
          );
        }
        return (
          new Date(b.date_received).getTime() -
          new Date(a.date_received).getTime()
        );
      })
    );
  };

  const handleSortByValue = () => {
    setSortByValue(!sortByValue);
    setSortByDate(false);
    setSortByClient(false);
    setInvoices(
      invoices.sort((a: any, b: any) => {
        if (sortByValue) {
          return a.value_received - b.value_received;
        }
        return b.value_received - a.value_received;
      })
    );
  };

  const handleSortByClient = () => {
    setSortByClient(!sortByClient);
    setSortByDate(false);
    setSortByValue(false);
    setInvoices(
      invoices.sort((a: any, b: any) => {
        if (sortByClient) {
          return a.client.localeCompare(b.client);
        }
        return b.client.localeCompare(a.client);
      })
    );
  };

  const handleFilterBtn = (period: 'year' | 'month') => {
    const filtered = invoices.filter((invoice: any) => {
      const date = new Date(invoice.date_received);
      if (period === 'year') {
        return date.getFullYear() === new Date().getFullYear();
      }
      return date.getMonth() === new Date().getMonth();
    });
    setFilteredInvoices(filtered);
  }

  return (
    <S.Main>
      <div className='invoice__filter'>
        <button className='invoice__filter--btn' onClick={() => handleFilterBtn('year')}>Filter current year</button>
        <button className='invoice__filter--btn' onClick={() => handleFilterBtn('month')}>Filter current month</button>
        <button className='invoice__filter--btn' onClick={() => setFilteredInvoices(invoices)}>Clear filters</button>
      </div>
      <li className='invoice__header'>
        <h2 className='invoice__header--client' onClick={handleSortByClient}>
          Client {sortByClient ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
        <h2 className='invoice__header--date' onClick={handleSortByDate}>
          Date {sortByDate ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
        <h2 className='invoice__header--value' onClick={handleSortByValue}>
          Value {sortByValue ? <BiChevronUp /> : <BiChevronDown />}
        </h2>
      </li>
      {filteredInvoices?.map(
        (invoice: {
          id: number;
          client: string;
          date_received: string;
          value_received: string;
        }) => (
          <li className='invoice__item' key={invoice.id}>
            <h3 className='invoice__item--client'>{invoice.client}</h3>
            <p className='invoice__item--date'>
              {new Date(invoice.date_received).toLocaleDateString()}
            </p>
            <p className='invoice__item--value'>
              {transformValue(invoice.value_received)}
            </p>
          </li>
        )
      )}
      <li className='invoice__total'>
        <p className='invoice__total--label'>Total</p>
        <p className='invoice__total--value'>
          {transformValue(
            filteredInvoices
              .reduce(
                (acc: number, curr: any) =>
                  acc + parseFloat(curr.value_received),
                0
              )
              .toString()
          )}
        </p>
      </li>
    </S.Main>
  );
};

export default InvoiceTable;
