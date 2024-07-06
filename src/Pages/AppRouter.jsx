import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "../Components/SideBar/SideBar"

const AppLayout = () => {
    return (
        <div className="flex flex-row bg-base-300">
            <SideBar />
            <div className="overflow-x-auto overflow-y-scroll max-h-screen w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayout;