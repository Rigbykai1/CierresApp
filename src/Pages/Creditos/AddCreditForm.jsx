import { IoIosAddCircleOutline } from "react-icons/io";
import { FaColonSign } from "react-icons/fa6";

const AddCreditForm = () => {
    return (
        <>
            <button className='btn btn-outline btn-primary-content' onClick={() => document.getElementById('EditClient').showModal()}><IoIosAddCircleOutline className='size-8' />Crédito</button>
            <dialog id="EditClient" className="modal">
                <div className="modal-box space-y-3 flex flex-col items-center w-auto">

                    <h3 className="font-bold text-lg">Añadiendo crédito</h3>
                    <label className="input input-bordered flex items-center gap-2 max-w-xs">
                        <input type="text" className="grow" placeholder="Monto" />
                        <FaColonSign />
                    </label>

                    <select className="select select-bordered w-full max-w-xs">
                        <option defaultValue="Cliente">Cliente</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <button className='btn btn-success text-base-100 max-w-sm'>Añadir crédito</button>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default AddCreditForm