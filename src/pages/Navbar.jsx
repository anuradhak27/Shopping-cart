import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 px-6 pt-6">
      <NavLink to="/" className="text-darkblue-100 underline m-3">
        Home
      </NavLink>
      <NavLink to="products" className="text-darkblue-100 underline m-3">
        Products
      </NavLink>
      <NavLink to="about" className="text-darkblue-100 underline m-3">
        About
      </NavLink>
      <NavLink
        to="Login"
        className="align-text-right text-darkblue-100 underline m-3 "
      >
        Login
      </NavLink>
      <NavLink
        to="Register"
        className="align-text-right text-darkblue-100 underline m-3 "
      >
        Resgister
      </NavLink>
    </nav>
  );
}

export default Navbar;
