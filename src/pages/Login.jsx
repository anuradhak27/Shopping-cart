import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [DBuser, setDBuser] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  // console.log(DBuser)
  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>error.message</div>;
  }

  const [users, setusers] = useState({
    name: "",
    pass: "",
  });
  const navigate = useNavigate();

  const changehandler = e => {
    setusers(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = e => {
    e.preventDefault();
    useEffect(() => {
      axios
        .get(" http://localhost:5000/user?username=user")
        .then(response => {
          setDBuser(response.data);

          setloading(false);
        })
        .catch(() => {
          seterror(error);
          setloading(false);
        });
    });

    {
      DBuser.map(details => console.log(details));
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user"
            type="text"
            name="user"
            value={users.user}
            placeholder="Username"
            onChange={changehandler}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="pass"
            type="password"
            value={users.pass}
            placeholder="******************"
            onChange={changehandler}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onSubmit={submitHandler}
          >
            Sign In
          </button>
          <p>New User?</p>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
    </div>
  );
}

export default Login;
