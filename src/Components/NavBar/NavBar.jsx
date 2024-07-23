import { Link } from "react-router-dom";
import ColorModeToggler from "./ColorModeToggler";
import NavBarSearch from "./NavBarSearch";
import DrawerToggler from "./DrawerToggler";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral w-full fixed z-10 items-center lg:justify-between gap-1 p-2 lg:p-2">
      <div className="navbar-start lg:hidden">
        <DrawerToggler />
      </div>
      <div className="navbar-center lg:hidden">
        <Link className="font-bold text-xl mb-2 text-center" to="/">
          CloX
        </Link>
      </div>
      <div className="hidden lg:flex lg:navbar-end space-x-1"></div>
      <div className="lg:mr-36 navbar-end gap-3">
        <NavBarSearch />
        <ColorModeToggler />
      </div>
    </div>
  );
};

export default NavBar;
