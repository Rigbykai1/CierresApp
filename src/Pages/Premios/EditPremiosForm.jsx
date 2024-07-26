import React from 'react'
import { FaColonSign } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

const EditPremiosForm = (props) => {
    const { modalID, transaction } = props;
    return (
        <dialog id={modalID} className="modal">
            <div className="modal-box">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Editando datos</h3>
                    <button className="btn btn-error text-base-100">
                        <MdDelete className="size-6" />
                    </button>
                </div>
                <div className="flex flex-col gap-3 py-4">
                    <div>
                        <span>Cliente</span>
                        <select className="select select-bordered w-full">
                            <option defaultValue={transaction.cliente}>{transaction.cliente}</option>
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
                            <option defaultValue={transaction.sorteo}>{transaction.sorteo}</option>
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
                                placeholder={transaction.monto}
                            />
                        </label>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <button className="btn btn-success text-base-100">Guardar</button>
                        <button
                            className="btn btn-error text-base-100"
                            onClick={() => {
                                document.getElementById(modalID).close();
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>
                    close
                </button>
            </form>
        </dialog>
    )
}

export default EditPremiosForm