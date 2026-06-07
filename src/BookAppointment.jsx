import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./BookAppointment.css";

const BookAppointment = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  // Load doctors for dropdown
  useEffect(() => {
    setDoctors([
      "Dr. Ramesh Kumar",
      "Dr. Priya Sharma",
      "Dr. Anil Verma",
      "Dr. Sneha Reddy",
      "Dr. Arjun Mehta",
      "Dr. Kavya Nair",
      "Dr. Rahul Singh",
      "Dr. Neha Kapoor",
      "Dr. Vikram Joshi",
      "Dr. Aishwarya Menon",
    ]);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing appointments from localStorage
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Add new appointment with default status "Pending"
    const newAppointment = { ...formData, status: "Pending" };
    savedAppointments.push(newAppointment);

    // Save back to localStorage
    localStorage.setItem("appointments", JSON.stringify(savedAppointments));

    // Show success message
    alert("✅ Appointment booked successfully!");

    // ✅ Navigate to home page after alert
    navigate("/"); // <-- This is the fix

    // Reset form (optional since we are navigating)
    setFormData({
      name: "",
      email: "",
      doctor: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  return (
    <div className="appointment-container">
      <div className="appointment-form-wrapper">
        <div className="appointment-left">
          <h2>HealthCare Appointment</h2>
          <p>Book your appointment easily with our top doctors.</p>
        </div>

        <div className="appointment-right">
          <h1 className="appointment-title">Appointment Form</h1>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Patient Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
            />

            <button type="submit" className="confirm-btn">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;