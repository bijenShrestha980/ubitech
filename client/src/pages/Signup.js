import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/apiCalls";
import { addUserFaliure, addUserSuccess } from "../redux/slices/user";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch)
      .then(() => {
        addUserSuccess(true);
        navigate("/login");
      })
      .catch(() => {
        addUserFaliure(false);
      });
  };
  return (
    <div className="min-h-screen items-stretch grid grid-cols-1 gap-5 content-center px-10 bg-teal-500">
      <input
        type="text"
        name="username"
        className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
        onChange={handleChange}
      />
      <button
        className="text-white text-5xl hover:text-6xl hover:font-bold px-10 mx-10 transition-all duration-100"
        onClick={handleRegister}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
