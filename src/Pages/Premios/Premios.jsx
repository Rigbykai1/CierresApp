import React from "react";
import AddPremiosForm from "./AddPremiosForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import SimpleTransactionCard from "../../Components/Cards/SimpleTransactionCard";

const Reportes = () => {
  const transactions = {
    transaction1: {
      cliente: "Humberto",
      sorteo: "Tica noche",
      monto: 200,
    },
    transaction2: {
      cliente: "Bismarck",
      sorteo: 2000,
      monto: "Nica 3",
    },
  };
  return (
    <div>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("EditClient").showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Premio
        </button>
        <AddPremiosForm />
      </div>
      <div className="flex flex-wrap gap-3 justify-evenly md:justify-start">
        {Object.values(transactions).map((transaction, index) => (
          <SimpleTransactionCard
            key={index}
            title={transaction.cliente}
            subtitle={transaction.sorteo}
            amount={transaction.monto}
          />
        ))}
      </div>
    </div>
  );
};

export default Reportes;
