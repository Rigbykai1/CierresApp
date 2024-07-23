import { Link } from "react-router-dom";
import { FaCoins, FaCreditCard, FaInfo } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { GiCreditsCurrency } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import DrawerSearcher from "./DrawerSearcher";
import DrawerLink from "./DrawerLink";

const DrawerContent = () => {
  const links = {
    link1: {
      nombre: "Clientes",
      url: "/Clientes",
      icono: <MdOutlinePersonPin className="size-5" />,
    },
    link2: {
      nombre: "Creditos",
      url: "/Creditos",
      icono: <GiCreditsCurrency className="size-5" />,
    },
    link3: {
      nombre: "Venta",
      url: "/Venta",
      icono: <FaInfo className="size-5" />,
    },
    link4: {
      nombre: "Premios",
      url: "/Premios",
      icono: <TbReportSearch className="size-5" />,
    },
    link5: {
      nombre: "Caja",
      url: "/Caja",
      icono: <FaCoins className="size-5" />,
    },
    link6: {
      nombre: "Sinpe",
      url: "/Sinpe",
      icono: <FaCreditCard className="size-5" />,
    },
    link7: {
      nombre: "Ajustes",
      url: "/Ajustes",
      icono: <IoMdSettings className="size-6" />,
    },
  };

  return (
    <div className="drawer-side z-30">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <ul className="menu bg-neutral text-base-content min-h-full w-auto gap-1">
        <DrawerSearcher />
        <div className="divider lg:hidden" />
        <Link
          className="btn btn-ghost hidden lg:flex font-bold text-xl mb-2 text-center"
          to="/"
        >
          CloX
        </Link>
        {Object.values(links).map((link, index) => (
          <DrawerLink
            key={index}
            nombre={link.nombre}
            url={link.url}
            icono={link.icono}
          />
        ))}
      </ul>
    </div>
  );
};

export default DrawerContent;
