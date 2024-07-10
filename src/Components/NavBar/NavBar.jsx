import { Link } from "react-router-dom";
import ColorModeToggler from "../ColorModeToggler";
import NavBarSearch from "./NavBarSearch";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral w-full fixed z-10 items-center lg:justify-between gap-1 p-2 lg:p-2">
      <div className="navbar-start lg:hidden">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-neutral btn-outline drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
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
