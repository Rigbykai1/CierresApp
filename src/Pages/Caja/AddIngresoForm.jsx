import React from "react";
import { FaColonSign } from "react-icons/fa6";

const AddIngresoForm = () => {
  return (
    <dialog id="addIngreso" className="modal">
      <div className="modal-box w-auto">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Realizando ingreso</h3>
        </div>
        <div className="py-4 space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            <FaColonSign />
            <input type="text" className="grow" placeholder="Monto" required />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Descripción" />
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option defaultValue="Tipo">Cliente</option>
            <option>Gris</option>
            <option>Humberto</option>
            <option>Ramon</option>
            <option>Juliana</option>
            <option>Faustino</option>
            <option>Javier</option>
          </select>
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
  );
};

export default AddIngresoForm;
