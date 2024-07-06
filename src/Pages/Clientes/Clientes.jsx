import React from 'react'
import ClientsTable from './ClientsTable'
import { FaSearch } from "react-icons/fa";
import FilterButton from './FilterButton';
import AddClientButton from './AddClientButton';

const Clientes = () => {
    return (
        <>
            <div className='flex flex-wrap gap-3 pb-3 justify-between place-items-center'>
                <div className='flex gap-1 place-items-center'>
                    <FilterButton />
                    <AddClientButton />
                </div>
                <div className='flex gap-1'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="w-full sm:grow" placeholder="Search" />
                    </label>
                    <button className="btn btn-accent"><FaSearch /></button>
                </div>
            </div>
            <ClientsTable />
        </>
    )
}

export default Clientes