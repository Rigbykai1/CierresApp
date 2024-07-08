import React from "react";
import { FaColonSign } from "react-icons/fa6";

const AddCierreForm = () => {
  return (
    <dialog id="doClose" className="modal">
      <div className="modal-box w-auto">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Realizando cierre</h3>
        </div>
        <div className="py-4 space-y-4">
          <label className="input input-bordered flex items-center gap-2">
            <FaColonSign />
            <input
              type="text"
              className="grow"
              placeholder="Caja apertura"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaColonSign />
            <input type="tel" className="grow" placeholder="Comisión" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaColonSign />
            <input type="text" className="grow" placeholder="Venta " />
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
  );
};

export default AddCierreForm;
