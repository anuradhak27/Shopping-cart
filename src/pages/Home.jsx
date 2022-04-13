import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="m-5">Welcome to Home page</h1>

      <button
        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
        onClick={() => {
          navigate("cart-summary");
        }}
      >
        Check Cart
      </button>
    </div>
  );
}

export default Home;
