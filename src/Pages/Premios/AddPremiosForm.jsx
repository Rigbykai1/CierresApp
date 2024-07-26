import { FaColonSign } from "react-icons/fa6";

const AddPremiosForm = (props) => {
  const { modalID } = props

  return (
    <>
      <dialog id={modalID} className="modal">
        <div className="modal-box space-y-3 w-auto">
          <h3 className="font-bold text-lg">Añadiendo premio</h3>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Monto" />
            <FaColonSign />
          </label>
          <select className="select select-bordered w-full">
            <option defaultValue="Cliente">Cliente</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full">
            <option defaultValue="Sorteo">Sorteo</option>
            <option>Tica dia</option>
            <option>Tica tarde</option>
            <option>Tica noche</option>
            <option>Nica 11</option>
            <option>Nica 3</option>
            <option>Nica 6</option>
            <option>Nica 9</option>
          </select>
          <div className="flex gap-4 justify-between">
            <button className="btn btn-success text-base-100">Guardar</button>
            <button className="btn btn-error text-base-100" onClick={() => document.getElementById(modalID).close()}>Cancelar</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddPremiosForm;
