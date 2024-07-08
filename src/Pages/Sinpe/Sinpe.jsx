import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddSinpeModal from "./AddSinpeModal";
import SimpleTransactionCard from "../../Components/Cards/SimpleTransactionCard";

const Sinpe = () => {
  const transactions = {
    Ingreso1: {
      cliente: "Griselda",
      tipo: "Pago",
      monto: 200,
    },
    Ingreso2: {
      cliente: "Johel",
      tipo: "Ingreso",
      monto: 2000,
    },
  };

  return (
    <>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("AddSinpeModal").showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Sinpe
        </button>
        <AddSinpeModal />
      </div>
      <div className="flex flex-wrap justify-evenly md:justify-start gap-3">
        {Object.values(transactions).map((transaction, index) => (
          <SimpleTransactionCard
            key={index}
            title={transaction.cliente}
            subtitle={transaction.tipo}
            amount={transaction.monto}
          />
        ))}
      </div>
    </>
  );
};

export default Sinpe;
