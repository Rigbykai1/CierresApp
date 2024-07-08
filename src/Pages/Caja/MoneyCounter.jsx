import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaColonSign } from "react-icons/fa6";
import { MdNumbers } from "react-icons/md";

const MoneyCounter = (props) => {
  const { moneda = 1 } = props;

  const [counter, setcounter] = useState(0);

  const sumaHandler = () => {
    setcounter(counter + 1);
  };
  const restaHandler = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-2 bg-neutral w-58 p-4">
      <h3 className={`text-center font-extrabold text-3xl ${moneda.color}`}>
        {counter * moneda.monto}
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
          onClick={() => document.getElementById("ChangeAmount").showModal()}
        >
          <FaEdit />
        </button>
        <button className="btn btn-square btn-outline" onClick={sumaHandler}>
          +
        </button>
      </div>
      <dialog id="ChangeAmount" className="modal">
        <div className="modal-box w-auto">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Añadiendo cliente</h3>
          </div>
          <div className="py-4 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaColonSign />
              <input
                type="text"
                className="grow"
                placeholder="Monto"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <MdNumbers />
              <input type="tel" className="grow" placeholder="Cantidad" />
            </label>

            <div className="flex gap-4 justify-between">
              <button className="btn btn-success text-base-100">Guardar</button>
              <button className="btn btn-error text-base-100">Cancelar</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MoneyCounter;
