import { React, useState } from "react";

function Men() {
  const [shirts, setshirts] = useState(0);
  const [trousers, settrousers] = useState(0);

  const handlechange = e => {
    setshirts(e.target.value);
    settrousers(e.target.value);
  };

  return (
    <div>
      <div>Welcome to the shopping world!</div>
      <br />
      <hr />
      <label
        className="block text-gray-700 text-sm font-bold m-2"
        htmlFor="shirts"
      >
        Add number of shirts
      </label>
      <input
        onChange={handlechange}
        className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="shirts"
        type="number"
        placeholder="1"
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold m-2"
        htmlFor="trousers"
      >
        Add number of trousers
      </label>
      <input
        onChange={handlechange}
        className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="trousers"
        type="number"
        placeholder="1"
      ></input>
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
        Add to Cart
      </button>
    </div>
  );
}

export default Men;
