import { FaColonSign } from "react-icons/fa6";

const AddCreditForm = (props) => {
  const { modalID } = props
  return (
    <>
      <dialog id={modalID} className="modal">
        <div className="modal-box w-auto">
          <h3 className="font-bold text-lg">Añadiendo crédito</h3>
          <div className="flex flex-col gap-3 py-4">
            <div>
              <span>Monto</span>
              <label className="input input-bordered flex items-center gap-2 max-w-xs">
                <input type="text" className="grow" placeholder="Monto" />
                <FaColonSign />
              </label>
            </div>
            <div>
              <span>Cliente</span>
              <select className="select select-bordered w-full">
                <option defaultValue="Cliente">Cliente</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div>
              <span>Monto</span>
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
            </div>
            <div className="flex gap-4 justify-between">
              <button className="btn btn-success text-base-100">Guardar</button>
              <button className="btn btn-error text-base-100" onClick={() => document.getElementById(modalID).close()}>Cancelar</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddCreditForm;
