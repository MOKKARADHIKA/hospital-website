import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ appointment, role, onComplete, onCancel, onEdit, onDelete }) => {
  return (
    <li className="appointment-card">
      <div className="appointment-info">
        <p><strong>Patient:</strong> {appointment.name}</p>
        <p><strong>Doctor:</strong> {appointment.doctor}</p>
        <p><strong>Date:</strong> {appointment.date} at {appointment.time}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span style={{
            color:
              appointment.status === "Completed"
                ? "green"
                : appointment.status === "Cancelled"
                ? "red"
                : "#f39c12"
          }}>
            {appointment.status || "Pending"}
          </span>
        </p>
        <p><strong>Notes:</strong> {appointment.notes || "No additional notes"}</p>
      </div>

      <div className="appointment-actions">
        {/* Buttons for Doctor */}
        {role === "doctor" && appointment.status === "Pending" && (
          <>
            <button onClick={onComplete}>Complete</button>
            <button onClick={onCancel}>Cancel</button>
          </>
        )}

        {/* Buttons for Admin */}
        {role === "admin" && (
          <>
            {appointment.status === "Pending" && (
              <button onClick={onComplete}>Complete</button>
            )}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default AppointmentCard;