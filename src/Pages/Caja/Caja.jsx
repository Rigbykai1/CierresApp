import { BsSafe } from "react-icons/bs";
import BilletesCounter from "./BilletesCounter";
import MonedasCounter from "./MonedasCounter";
import { PiChartLineDownLight, PiChartLineUpLight } from "react-icons/pi";
import AddCierreForm from "./AddCierreForm";
import AddIngresoForm from "./AddIngresoForm";
import AddRetiroForm from "./AddRetiroForm";
const Caja = () => {
  const cierreFormID = "cierreForm"
  const ingresoFormID = "ingresoForm"
  const retiroFormID = "retiroForm"

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1 place-items-center">
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById(cierreFormID).showModal()}
        >
          <BsSafe className="size-8" /> Cierre
        </button>
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById(ingresoFormID).showModal()}
        >
          <PiChartLineUpLight className="size-8" /> Ingreso
        </button>
        <button
          className="btn btn-outline btn-primary-content"
          onClick={() => document.getElementById(retiroFormID).showModal()}
        >
          <PiChartLineDownLight className="size-8" /> Retiro
        </button>
      </div>
      <BilletesCounter />
      <MonedasCounter />
      <AddCierreForm modalID={cierreFormID} />
      <AddIngresoForm modalID={ingresoFormID} />
      <AddRetiroForm modalID={retiroFormID} />
    </div>
  );
};

export default Caja;
