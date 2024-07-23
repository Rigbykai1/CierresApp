import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import DrawerContent from "../Components/Drawer/DrawerContent";

const AppLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar />
        <div className="pt-20 px-5 lg:px-3">
          <Outlet />
        </div>
      </div>
      <DrawerContent />
    </div>
  );
};

export default AppLayout;
