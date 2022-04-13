import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="m-10 columns-1">
      <Link to="Men" className="m-4 text-darkblue-100 underline">
        Men
      </Link>
      <Link to="Women" className="m-4 text-darkblue-100 underline">
        Women
      </Link>
      <Link to="Kids" className="m-4 text-darkblue-100 underline">
        Kids
      </Link>
      <Outlet />
    </div>
  );
}

export default Products;
