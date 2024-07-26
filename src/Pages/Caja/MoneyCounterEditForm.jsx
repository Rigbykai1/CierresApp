import { FaColonSign } from "react-icons/fa6";
import { MdNumbers } from "react-icons/md";

const MoneyCounterEditForm = (props) => {
    const { modalID, counter, total } = props
    return (
        <dialog id={modalID} className="modal">
            <div className="modal-box w-auto">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Añadiendo cliente</h3>
                </div>
                <div className="flex flex-col py-4 gap-3">
                    <div>

                        <span>Total</span>

                        <label className="input input-bordered flex items-center gap-2">

                            <FaColonSign />
                            <input
                                type="text"
                                className="grow"
                                placeholder={total}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <span>Cantidad</span>
                        <label className="input input-bordered flex items-center gap-2">

                            <MdNumbers />
                            <input type="tel" className="grow" placeholder={counter} />
                        </label>
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
    )
}

export default MoneyCounterEditForm