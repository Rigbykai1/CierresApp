import React from "react";

const DrawerToggler = () => {
  return (
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
  );
};

export default DrawerToggler;
