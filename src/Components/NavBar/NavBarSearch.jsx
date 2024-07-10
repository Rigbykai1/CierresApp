import React from "react";

const NavBarSearch = () => {
  return (
    <div className="hidden form-control lg:flex lg:flex-row gap-3">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-auto"
      />
      <button className="btn btn-outline">Buscar</button>
    </div>
  );
};

export default NavBarSearch;
