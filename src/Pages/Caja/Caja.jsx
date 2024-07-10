import { BsSafe } from "react-icons/bs";
import BilletesCounter from "./BilletesCounter";
import MonedasCounter from "./MonedasCounter";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import AddCierreForm from "./AddCierreForm";
import AddIngresoForm from "./AddIngresoForm";
import AddRetiroForm from "./AddRetiroForm";
const Caja = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1 place-items-center">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("doClose").showModal()}
        >
          <BsSafe className="size-8" /> Cierre
        </button>
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("addIngreso").showModal()}
        >
          <PiChartLineUpLight className="size-8" /> Ingreso
        </button>
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById("addRetiro").showModal()}
        >
          <PiChartLineDownLight className="size-8" /> Retiro
        </button>
      </div>
      <BilletesCounter />
      <MonedasCounter />
      <AddCierreForm />
      <AddIngresoForm />
      <AddRetiroForm />
    </div>
  );
};

export default Caja;
