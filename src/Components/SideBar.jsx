import React, { useEffect, useState } from 'react';
import { FaHome, FaChartLine, FaCoins, FaCreditCard } from "react-icons/fa";
import { MdOutlinePersonPin } from "react-icons/md";
import { GiCreditsCurrency } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import ColorModeToggler from './ColorModeToggler';
import SideBarToggler from './SideBarToggler';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = localStorage.getItem("SideBarState");
        return savedState === null ? true : JSON.parse(savedState);
    });

    const location = useLocation();

    const getLastWordOfURL = (string) => {
        const urlSegments = string.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        const words = lastSegment.split('-');
        const lastWord = words[words.length - 1];
        return lastWord;
    };

    const actualPage = getLastWordOfURL(location.pathname);
    const selectedLink = (link) => actualPage === link ? "bg-neutral-content text-neutral hover:btn-primary" : "btn-primary-content btn-outline";

    useEffect(() => {
        localStorage.setItem("SideBarState", JSON.stringify(isOpen));
    }, [isOpen]);

    const handleBar = () => {
        setIsOpen(prevState => !prevState);
    };

    const btnSize = isOpen ? "w-32" : "w-full";

    return (
        <div className="flex flex-col p-2 gap-3 h-[97vh] bg-neutral m-2 rounded-lg justify-between">
            <div className='flex flex-col gap-3'>
                <SideBarToggler isOpen={isOpen} handleBar={handleBar} />
                <ColorModeToggler />
            </div>
            <div className='flex flex-col gap-3'>
                <Link className={`btn ${selectedLink("")} justify-between ${btnSize}`} to='/'>
                    <FaHome className='size-5' />
                    {isOpen ? "Inicio" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Clientes")} justify-between ${btnSize}`} to='/Clientes'>
                    <MdOutlinePersonPin className='size-5' />
                    {isOpen ? "Clientes" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Creditos")} justify-between ${btnSize}`} to='/Creditos'>
                    <GiCreditsCurrency className='size-5' />
                    {isOpen ? "Creditos" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Venta")} justify-between ${btnSize}`} to='/Venta'>
                    <FaChartLine className='size-5' />
                    {isOpen ? "Venta" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Reportes")} justify-between ${btnSize}`} to='/Reportes'>
                    <TbReportSearch className='size-5' />
                    {isOpen ? "Reportes" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Caja")} justify-between ${btnSize}`} to='/Caja'>
                    <FaCoins className='size-5' />
                    {isOpen ? "Caja" : ""}
                </Link>
                <Link className={`btn ${selectedLink("Sinpe")} justify-between ${btnSize}`} to='/Sinpe'>
                    <FaCreditCard className='size-5' />
                    {isOpen ? "Sinpe" : ""}
                </Link>
            </div>
            <div className='flex flex-col gap-3'>
                <Link className={`btn ${selectedLink("Ajustes")} justify-between ${btnSize}`} to='/Ajustes'>
                    <IoMdSettings className='size-6' />
                    {isOpen ? "Settings" : ""}
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
