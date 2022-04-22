import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen items-stretch bg-teal-500">
      <div className="min-h-screen flex justify-center">
        <button
          onClick={() => navigate("/login")}
          className="text-white text-5xl hover:text-6xl hover:font-bold px-10 mx-10 transition-all duration-100"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-white text-5xl hover:text-6xl hover:font-bold px-10 mx-10 transition-all duration-100"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
