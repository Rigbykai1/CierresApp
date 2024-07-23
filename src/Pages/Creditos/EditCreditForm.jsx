import { FaColonSign } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const EditCreditForm = (props) => {
  const { transactionInfo, setTransactionInfo } = props;
  const handleClose = () => {
    setTransactionInfo("");
  };

  return (
    <dialog id="EditCreditTransaction" className="modal">
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Editando datos</h3>
          <button className="btn btn-error text-base-100">
            <MdDelete className="size-6" />
          </button>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div>
            <span>Cliente</span>
            <select className="select select-bordered w-full">
              <option selected>{transactionInfo.cliente}</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div>
            <span>Sorteo</span>
            <select className="select select-bordered w-full">
              <option selected>{transactionInfo.sorteo}</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div>
            <span>Monto</span>
            <label className="input input-bordered flex items-center gap-2">
              <FaColonSign />
              <input
                type="tel"
                className="grow"
                placeholder={transactionInfo.monto}
              />
            </label>
          </div>
          <div className="flex gap-4 justify-between">
            <button className="btn btn-success text-base-100">Guardar</button>
            <button
              className="btn btn-error text-base-100"
              onClick={() => {
                document.getElementById("EditCreditTransaction").close();
                handleClose();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            document.getElementById("EditCreditTransaction").close();
            handleClose();
          }}
        >
          close
        </button>
      </form>
    </dialog>
  );
};

export default EditCreditForm;
