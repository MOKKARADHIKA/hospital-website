import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    reset();

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h2>Patient Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="register-form">

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;