import React, { useState } from "react";
import AddPremiosForm from "./AddPremiosForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import PremiosCard from "./PremiosCard";
import EditPremiosForm from "./EditPremiosForm";

const Reportes = () => {
  const [transactionInfo, setTransactionInfo] = useState("");
  const addingModalID = "agregarPremio"
  const editingModalID = "editarPremio"
  const transactions = {
    transaction1: {
      cliente: "Carlos",
      sorteo: "Tica noche",
      monto: 200,
    },
    transaction2: {
      cliente: "Edwin",
      sorteo: "Nica 3",
      monto: 2000,
    },
  };
  return (
    <div>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById(addingModalID).showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Premio
        </button>
        <AddPremiosForm modalID={addingModalID} />
      </div>
      <div className="flex flex-wrap gap-3 justify-evenly md:justify-start">
        {Object.values(transactions).map((transaction, index) => (
          <PremiosCard
            key={index}
            transaction={transaction}
            setTransactionInfo={setTransactionInfo}
            modalID={editingModalID}
          />
        ))}
      </div>
      <EditPremiosForm transaction={transactionInfo} modalID={editingModalID} />
    </div>
  );
};

export default Reportes;
