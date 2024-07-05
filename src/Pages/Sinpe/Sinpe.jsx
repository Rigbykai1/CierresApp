import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaColonSign } from "react-icons/fa6";
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

const Sinpe = () => {
    const transactions = {
        Ingreso1: {
            tipo: "pago",
            monto: 200,
        },
        Ingreso2: {
            tipo: "Ingreso",
            monto: 2000,
        }
    }

    const cardIcon = (transaction) => {
        const style = (transaction == "Ingreso") ? "size-16 text-error" : "size-16 text-success"
        return transaction === "Ingreso"
            ? <FaArrowCircleUp className={style} />
            : <FaArrowCircleDown className={style} />
    }
    return (
        <div className='p-2'>
            <div className='flex gap-3 p-3'>
                <button className='btn btn-outline btn-primary-content' onClick={() => document.getElementById('AddSinpe').showModal()}><IoIosAddCircleOutline className='size-8' />Sinpe</button>
                <dialog id="AddSinpe" className="modal">
                    <div className="modal-box space-y-3 flex flex-col items-center w-auto">
                        <h3 className="font-bold text-lg">Añadiendo sinpe</h3>
                        <label className="input input-bordered flex items-center gap-2 max-w-xs">
                            <input type="text" className="grow" placeholder="Monto" />
                            <FaColonSign />
                        </label>

                        <select className="select select-bordered w-full max-w-xs">
                            <option defaultValue="Ingreso" >Cliente</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs">
                            <option defaultValue="Tipo">Tipo</option>
                            <option>Ingreso</option>
                            <option>Pago</option>
                        </select>
                        <button className='btn btn-success max-w-sm text-base-100'>Añadir Sinpe</button>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
            <div className='flex flex-col space-y-4'>
                {
                    Object.values(transactions).map((transaction, index) => (

                        <div className='flex flex-wrap gap-3' key={index}>
                            <div className="card card-side bg-primary-content/90 shadow-xl px-4 text-primary">
                                <figure>
                                    {cardIcon(transaction.tipo)}
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title">ClienteName</h2>
                                    <p className='flex items-center'>
                                        {transaction.monto}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-accent">Ver transacción</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>



        </div>
    )
}

export default Sinpe