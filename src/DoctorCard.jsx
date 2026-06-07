import React from "react";
import "./DoctorCard.css";
import { useNavigate } from "react-router-dom";   // ✅ Import useNavigate

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();   // ✅ Initialize navigate

  // Function to navigate to the Book Appointment page
  const handleBookAppointment = () => {
    navigate("/book-appointment"); // ✅ Navigate to BookAppointment page
    // Optional: To pass doctor info: navigate(`/book-appointment?doctorId=${doctor.id}`);
  };

  return (
    <div className="doctor-card">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="doctor-image"
      />

      {/* Doctor Info */}
      <h2 className="doctor-name">{doctor.name}</h2>

      <p className="doctor-specialization">
        <strong>Specialization:</strong> {doctor.specialization}
      </p>

      <p className="doctor-experience">
        <strong>Experience:</strong> {doctor.experience} years
      </p>

      <p className="doctor-description">{doctor.description}</p>

      {/* Book Appointment Button */}
      <button
        className="book-btn"
        onClick={handleBookAppointment}   // ✅ Updated click handler
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;