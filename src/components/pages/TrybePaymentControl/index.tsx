import PaymentForm from "@/components/PaymentForm";
import * as S from "./TrybePaymentControl.styled";
import PaymentTable from "@/components/PaymentTable";

const TrybeControl = () => {
  return (
    <S.Main>
      <div className='container'>
        <h1 className='control__title'>Trybe Payments Control</h1>
        <PaymentForm />
        <PaymentTable />
      </div>
    </S.Main>
  );
};

export default TrybeControl;
