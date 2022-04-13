import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ shirts, trousers }) {
  const navigate = useNavigate();
  return (
    <div className="m-3">
      Welcome to Cart
      <hr />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => navigate("order-summary")}
      >
        Place Order
      </button>
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white margin: font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Cart;
