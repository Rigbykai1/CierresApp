import { React, useEffect, useState } from 'react'
import { FaHome, FaChartLine, FaCoins, FaCreditCard } from "react-icons/fa";
import ColorModeToggler from './ColorModeToggler';
import { MdOutlinePersonPin } from "react-icons/md";
import { GiCreditsCurrency } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import SideBarToggler from './SideBarToggler';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const savedState = localStorage.getItem("SideBarState");
        return savedState === null ? true : JSON.parse(savedState);
    });

    const getLastWordOfURL = (string) => {
        const urlSegments = string.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        const words = lastSegment.split('-');
        const lastWord = words[words.length - 1];
        return lastWord;
    }
    const actualPage = getLastWordOfURL(window.location.href)
    const selectedLink = (link) => actualPage == link ? "bg-neutral-content text-neutral hover:btn-primary" : "btn-primary-content btn-outline"

    useEffect(() => {
        localStorage.setItem("SideBarState", JSON.stringify(isOpen));
    }, [isOpen]);

    const handleBar = () => {
        setIsOpen(prevState => !prevState);
    };

    const btnSize = isOpen ? "w-32" : "w-full";

    return (
        <div className="flex flex-col p-2 gap-3 h-[97vh]  bg-neutral m-2 rounded-lg justify-between">
            <div className='flex flex-col gap-3'>
                <SideBarToggler isOpen={isOpen} handleBar={handleBar} />
                <ColorModeToggler />
            </div>
            <div className='flex flex-col gap-3'>
                <a className={`btn ${selectedLink("Inicio")} justify-between ${btnSize}`} href='/Inicio'>
                    <FaHome className='size-5' />
                    {isOpen ? "Inicio" : ""}
                </a>
                <a className={`btn ${selectedLink("Clientes")} justify-between ${btnSize}`} href='/Clientes'>
                    <MdOutlinePersonPin className='size-5' />
                    {isOpen ? "Clientes" : ""}
                </a>
                <a className={`btn ${selectedLink("Creditos")} justify-between ${btnSize}`} href='/Creditos'>
                    <GiCreditsCurrency className='size-5' />
                    {isOpen ? "Creditos" : ""}
                </a>
                <a className={`btn ${selectedLink("Venta")} justify-between ${btnSize}`} href='/Venta'>
                    <FaChartLine className='size-5' />
                    {isOpen ? "Venta" : ""}
                </a>
                <a className={`btn ${selectedLink("Reportes")} justify-between ${btnSize}`} href='/Reportes'>
                    <TbReportSearch className='size-5' />
                    {isOpen ? "Reportes" : ""}
                </a>
                <a className={`btn ${selectedLink("Caja")} justify-between ${btnSize}`} href='Caja'>
                    <FaCoins className='size-5' />
                    {isOpen ? "Caja" : ""}
                </a>
                <a className={`btn ${selectedLink("Sinpe")} justify-between ${btnSize}`} href='Sinpe'>
                    <FaCreditCard className='size-5' />
                    {isOpen ? "Sinpe" : ""}
                </a>
            </div>
            <div className='flex flex-col gap-3'>
                <a className={`btn ${selectedLink("Settings")} justify-between ${btnSize}`} href='Settings'>
                    <IoMdSettings className='size-6' />
                    {isOpen ? "Settings" : ""}
                </a>
            </div>

        </div>
    )
}

export default SideBar