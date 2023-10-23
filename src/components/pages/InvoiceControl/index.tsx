import InvoiceForm from "@/components/InvoiceForm";
import * as S from "./InvoiceControl.styled";
import InvoiceTable from "@/components/InvoiceTable";

const InvoiceControl = () => {
  return (
    <S.Main>
      <div className='container'>
        <h1 className='control__title'>Invoices Control</h1>
        <InvoiceForm />
        <InvoiceTable />
      </div>
    </S.Main>
  );
};

export default InvoiceControl;
