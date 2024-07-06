import { IoIosAdd, IoIosAddCircleOutline } from "react-icons/io";

import AddCreditForm from "./AddCreditForm";

const Creditos = () => {
  return (
    <>
      <div className="flex gap-3 pb-3">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("EditClient").showModal()}
        >
          <IoIosAddCircleOutline className="size-8" />
          Crédito
        </button>
        <AddCreditForm />
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="stats bg-black/70 flex flex-col max-w-sm text-white">
          <div className="stat">
            <h3 className="stat-value text-lg sm:text-3xl">Client name</h3>
            <button className="btn btn-sm btn-error justify-center">
              <IoIosAdd />
              Crédito
            </button>
          </div>

          <div className="stat">
            <h4 className="text-white">Balance</h4>
            <h3 className="stat-value text-lg sm:text-3xl">$89,400</h3>
            <div className="flex flex-col gap-1 sm:flex-row py-1">
              <button className="btn btn-sm btn-success">
                <IoIosAdd />
                Ingreso
              </button>
              <button className="btn btn-sm btn-info">
                <IoIosAdd />
                Premio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creditos;
