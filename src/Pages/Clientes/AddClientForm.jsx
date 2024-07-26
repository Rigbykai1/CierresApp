import { BsTelephone, BsMailbox } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const AddClientForm = (props) => {
    const { modalID } = props
    return (
        <dialog id={modalID} className="modal">
            <div className="modal-box w-auto">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">Añadiendo cliente</h3>
                </div>
                <div className="flex flex-col gap-3 py-4">
                    <div>
                        <span>Nombre</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <CiUser />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Nombre"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <span>Teléfono</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <BsTelephone />
                            <input type="tel" className="grow" placeholder="Telefono" />
                        </label>
                    </div>
                    <div>
                        <span>Correo</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <BsMailbox />
                            <input type="text" className="grow" placeholder="Correo " />
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

export default AddClientForm