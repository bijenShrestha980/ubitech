import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const btn = useRef(null);
  const { isFetching } = useSelector((state) => state.login);
  const textInput = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    textInput.current.focus();
  };

  return (
    <div className="min-h-screen items-stretch grid grid-cols-1 gap-5 content-center px-10 bg-teal-500">
      <input
        ref={textInput}
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
      />
      <button
        ref={btn}
        onClick={handleClick}
        disabled={isFetching}
        className="text-white text-5xl hover:text-6xl hover:font-bold px-10 mx-10 transition-all duration-100"
      >
        SignIn
      </button>
    </div>
  );
};

export default Login;
