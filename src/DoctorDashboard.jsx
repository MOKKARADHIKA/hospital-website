import React, { useState, useEffect } from "react";
import "./DoctorDashboard.css";

function DoctorDashboard({ doctorName }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(saved);
  }, []);

  // Filter appointments for this doctor
  const myAppointments = appointments.filter(a => a.doctor === doctorName);

  const handleUpdateStatus = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    const actualIndex = appointments.indexOf(myAppointments[index]);
    updatedAppointments[actualIndex].status = newStatus;

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const handleLogout = () => window.location.href = "/";

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{doctorName} Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="appointments-section">
        <h3>My Appointments</h3>
        {myAppointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <ul className="appointments-list">
            {myAppointments.map((appt, idx) => (
              <li key={idx} className="appointment-card">
                <p><strong>Patient:</strong> {appt.name}</p>
                <p><strong>Date:</strong> {appt.date} at {appt.time}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span style={{
                    color:
                      appt.status === "Completed"
                        ? "green"
                        : appt.status === "Cancelled"
                        ? "red"
                        : "#f39c12"
                  }}>
                    {appt.status}
                  </span>
                </p>
                {appt.status === "Pending" && (
                  <div className="appointment-actions">
                    <button onClick={() => handleUpdateStatus(idx, "Completed")}>Complete</button>
                    <button onClick={() => handleUpdateStatus(idx, "Cancelled")}>Cancel</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;