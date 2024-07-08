import { FaColonSign } from "react-icons/fa6";

const AddSinpeModal = () => {
  return (
    <dialog id="AddSinpeModal" className="modal">
      <div className="modal-box space-y-3 space-x-3 w-auto">
        <h3 className="font-bold text-lg">Añadiendo sinpe</h3>
        <label className="input input-bordered flex items-center gap-2 w-auto">
          <input type="text" className="grow" placeholder="Monto" />
          <FaColonSign />
        </label>
        <select className="select select-bordered w-auto">
          <option defaultValue="Ingreso">Cliente</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select className="select select-bordered w-auto">
          <option defaultValue="Tipo">Tipo</option>
          <option>Ingreso</option>
          <option>Pago</option>
        </select>
        <select className="select select-bordered w-auto">
          <option defaultValue="Tipo">Cuenta</option>
          <option>Yamileth</option>
          <option>Humberto</option>
        </select>
        <div className="flex gap-4 justify-between">
          <button className="btn btn-success text-base-100">Guardar</button>
          <button className="btn btn-error text-base-100">Cancelar</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddSinpeModal;
