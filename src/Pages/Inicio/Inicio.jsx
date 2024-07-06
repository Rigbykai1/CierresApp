import React from "react";
import { GrMoney } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { RiSafe2Line } from "react-icons/ri";
import { TbCreditCardPay } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";

const Inicio = () => {
  const statItems = {
    stat1: {
      titulo: "Ventas",
      valor: "109K",
      icono: <GrMoney className="inline-block h-8 w-8" />,
    },
    stat2: {
      titulo: "Creditos",
      valor: "71,500",
      icono: <TbCreditCardPay className="inline-block h-8 w-8" />,
    },
    stat3: {
      titulo: "Sinpes",
      valor: "54,300",
      icono: <MdContactPhone className="inline-block h-8 w-8" />,
    },
    stat4: {
      titulo: "Comision",
      valor: "18,450",
      icono: <VscGraphLine className="inline-block h-8 w-8" />,
    },
  };

  return (
    <>
      <div className="flex flex-wrap gap-1 justify-center">
        {Object.values(statItems).map((statItem, index) => (
          <div className="stat max-w-80 bg-neutral" key={index}>
            <div className="stat-figure">{statItem.icono}</div>
            <div className="stat-title">{statItem.titulo}</div>
            <div className="stat-value text-lg sm:text-3xl">
              {statItem.valor}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Inicio;
