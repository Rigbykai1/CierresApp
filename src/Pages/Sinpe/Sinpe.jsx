import { React, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddSinpeModal from "./AddSinpeModal";
import SinpeCard from "./SinpeCard";
import EditSinpeForm from "./EditSinpeForm";

const Sinpe = () => {
  const [transactionInfo, setTransactionInfo] = useState("");
  const addSinpeModalID = "AddSinpeTransaction"
  const editSinpeModalID = "EditSinpeTransaction";
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
          onClick={() => document.getElementById(addSinpeModalID).showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Sinpe
        </button>
        <AddSinpeModal modalId={addSinpeModalID} />
      </div>
      <div className="flex flex-wrap justify-evenly md:justify-start gap-3">
        {Object.values(transactions).map((transaction, index) => (
          <SinpeCard
            key={index}
            transaction={transaction}
            setTransactionInfo={setTransactionInfo}
            modalID={editSinpeModalID}
          />
        ))}
      </div>
      <EditSinpeForm transaction={transactionInfo} modalID={editSinpeModalID} />
    </>
  );
};

export default Sinpe;
