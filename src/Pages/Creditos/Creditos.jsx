import { IoIosAddCircleOutline } from "react-icons/io";
import AddCreditForm from "./AddCreditForm";
import CreditCard from "./CreditCard";
import EditCreditForm from "./EditCreditForm";
import { useState } from "react";
const Creditos = () => {
  const [transactionInfo, setTransactionInfo] = useState("");
  console.log(transactionInfo);
  const transactions = {
    transaction1: {
      id: 1,
      cliente: "Humberto",
      sorteo: "Tica noche",
      monto: 200,
    },
    transaction2: {
      id: 2,
      cliente: "Bismarck",
      sorteo: "Nica 9",
      monto: 2000,
    },
  };

  return (
    <>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("EditCredit").showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Crédito
        </button>
        <AddCreditForm />
      </div>
      <div className="flex flex-wrap gap-3 justify-evenly md:justify-start">
        {Object.values(transactions).map((transaction, index) => (
          <CreditCard
            key={index}
            transaction={transaction}
            setTransactionInfo={setTransactionInfo}
          />
        ))}
      </div>
      <EditCreditForm
        transactionInfo={transactionInfo}
        setTransactionInfo={setTransactionInfo}
      />
    </>
  );
};

export default Creditos;
