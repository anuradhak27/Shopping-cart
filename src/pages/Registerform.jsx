import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registerform() {
  const navigate = useNavigate();
  const [newuser, setnewuser] = useState({
    username: "",
    password: "",
    confirm: "",
    islogged: false,
  });

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const changehandler = e => {
    setnewuser({ ...newuser, [e.target.name]: e.target.value });
    console.log(newuser.password);
    // console.log(newuser.confirm)
  };

  const submitHandler = e => {
    e.preventDefault();

    if (newuser.password !== newuser.confirm) {
      alert("Password and confirm password are not same");
      setnewuser({
        username: "",
        password: "",
        confirm: "",
        //islogged:false
      });
    } else {
      setloading(true);
      // console.log(newuser)
      const payload = { ...newuser, islogged: true };
      delete payload.confirm;
      axios
        .post(" http://localhost:5000/user", payload)
        .then(() => {
          setloading(false);
          alert("Registered successfully");
          setnewuser({
            username: "",
            password: "",
            confirm: "",
          });
          navigate("/login");
        })
        .catch(() => {
          seterror(error);
          setloading(false);
        });
    }
  };

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>error.message</div>;
  }

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            value={newuser.username}
            placeholder="Username"
            required
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
            name="password"
            value={newuser.password}
            type="password"
            required
            placeholder="******************"
            onChange={changehandler}
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmpassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm"
            name="confirm"
            value={newuser.confirm}
            type="password"
            required
            placeholder="******************"
            onChange={changehandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registerform;
