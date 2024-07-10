import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { FaHome, FaCoins, FaCreditCard, FaInfo } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { GiCreditsCurrency } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import NavBar from "../Components/NavBar/NavBar";

const AppLayout = () => {
  const location = useLocation();
  const getLastWordOfURL = (string) => {
    const urlSegments = string.split("/");
    const lastSegment = urlSegments[urlSegments.length - 1];
    const words = lastSegment.split("-");
    const lastWord = words[words.length - 1];
    return lastWord;
  };

  const actualPage = getLastWordOfURL(location.pathname);
  const selectedLink = (link) =>
    actualPage === link
      ? "bg-neutral-content text-neutral hover:btn-ghost"
      : "";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar />
        <div className="pt-20 p-5 lg:p-3 lg:pt-20">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-neutral text-base-content min-h-full w-auto gap-1">
          <div className="form-control lg:hidden gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-32"
            />
            <button className="btn btn-outline">Buscar</button>
          </div>
          <div className="divider lg:hidden" />
          <Link
            className="btn  btn-ghost hidden lg:flex font-bold text-xl mb-2 text-center"
            to="/"
          >
            CloX
          </Link>
          <Link
            className={`btn ${selectedLink(
              "Clientes"
            )} justify-between btn-ghost`}
            to="/Clientes"
          >
            <MdOutlinePersonPin className="size-5" />
            Clientes
          </Link>
          <Link
            className={`btn ${selectedLink(
              "Creditos"
            )} justify-between btn-ghost`}
            to="/Creditos"
          >
            <GiCreditsCurrency className="size-5" />
            Creditos
          </Link>
          <Link
            className={`btn ${selectedLink("Venta")} justify-between btn-ghost`}
            to="/Venta"
          >
            <FaInfo className="size-5" />
            Venta
          </Link>
          <Link
            className={`btn ${selectedLink(
              "Premios"
            )} justify-between btn-ghost`}
            to="/Premios"
          >
            <TbReportSearch className="size-5" />
            Premios
          </Link>
          <Link
            className={`btn ${selectedLink("Caja")} justify-between btn-ghost`}
            to="/Caja"
          >
            <FaCoins className="size-5" />
            Caja
          </Link>
          <Link
            className={`btn ${selectedLink("Sinpe")} justify-between btn-ghost`}
            to="/Sinpe"
          >
            <FaCreditCard className="size-5" />
            Sinpe
          </Link>
          <Link
            className={`btn ${selectedLink(
              "Ajustes"
            )} justify-between btn-ghost`}
            to="/Ajustes"
          >
            <IoMdSettings className="size-6" />
            Ajustes
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AppLayout;
