import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../redux/apiCalls";
import { updateUserFailure, updateUserSuccess } from "../redux/slices/user";
import Login from "./Login";

const Profile = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  const [inputs, setInputs] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logged = useSelector((state) => state.login.currentUser);

  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === id)
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    updateUser(id, user, dispatch)
      .then(() => {
        updateUserSuccess(true);
        navigate("/");
      })
      .catch(() => {
        updateUserFailure(false);
      });
  };
  if (logged) {
    return (
      <div className="min-h-screen items-stretch grid grid-cols-1 gap-5 content-center px-10 bg-teal-500">
        <input
          type="text"
          name="username"
          placeholder={user.username}
          className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={user.email}
          className="px-5 py-5 mx-10 rounded-xl transition-all duration-75 outline-0"
          onChange={handleChange}
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
          onClick={handleClick}
        >
          Update
        </button>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Profile;
