import { FaFilter } from "react-icons/fa";


const FilterButton = () => {
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn btn-accent"><FaFilter /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-neutral rounded-box w-52 p-2 shadow z-10 m-1">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    )
}

export default FilterButton