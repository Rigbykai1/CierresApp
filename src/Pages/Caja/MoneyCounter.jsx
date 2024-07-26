import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import MoneyCounterEditForm from "./MoneyCounterEditForm";

const MoneyCounter = (props) => {
  const { moneda = 1, index, formID } = props;

  const [counter, setcounter] = useState(0);
  const [total, setTotal] = useState(counter * moneda.monto);

  const sumaHandler = () => {
    setcounter(counter + 1);
  };
  const restaHandler = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      setTotal(moneda.monto * counter);
    }
  };

  useEffect(() => {
    setTotal(moneda.monto * counter);
  }, [counter]);

  const modalID = formID + index

  return (
    <div className="grid grid-cols-1 gap-2 bg-neutral w-58 p-4">
      <h3 className={`text-center font-extrabold text-3xl ${moneda.color}`}>
        {total}
      </h3>
      <div className="flex flex-wrap gap-1 justify-center">
        <h3 className="bg-primary/10 p-1">Valor: {moneda.monto}</h3>
        <h3 className="bg-primary/10 p-1">Cantidad: {counter}</h3>
      </div>
      <div className="flex justify-between">
        <button className="btn btn-square btn-outline" onClick={restaHandler}>
          -
        </button>
        <button
          className="btn btn-square btn-outline"
          onClick={() =>
            document.getElementById(modalID).showModal()
          }
        >
          <FaEdit />
        </button>
        <button className="btn btn-square btn-outline" onClick={sumaHandler}>
          +
        </button>
      </div>
      <MoneyCounterEditForm modalID={modalID} counter={counter} total={total} />
    </div>
  );
};

export default MoneyCounter;
