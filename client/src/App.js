import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  const login = useSelector((state) => state.login.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />

        {login ? (
          <Route path="/login" element={<Navigate replace to="/" />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        {/* {user ? (
          <Route path="/register" element={<Navigate replace to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
