import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    // if (validUser) {
    //   alert("Login Successful!");

    //   localStorage.setItem("loggedInUser", JSON.stringify(validUser));

    //   navigate("/doctors");
    if (validUser) {
  localStorage.setItem("loggedInUser", JSON.stringify(validUser));

  // show popup first
  alert("Login Successful!");

  // after OK click → navigate
  navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }

    reset();
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>User Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;