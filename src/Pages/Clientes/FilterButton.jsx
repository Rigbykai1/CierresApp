import { FaFilter } from "react-icons/fa";


const FilterButton = () => {
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-accent m-1"><FaFilter /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}

export default FilterButton