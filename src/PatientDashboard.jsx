import React, { useState, useEffect } from "react";
import "./PatientDashboard.css"; // create a CSS file for styling

function PatientDashboard() {
  // Fetch appointments from LocalStorage
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  // For editing appointment
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", date: "", time: "" });

  // Handle edit click
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(appointments[index]);
  };

  // Handle delete appointment
  const handleDelete = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  // Save edited appointment
  const handleSave = () => {
    const updated = [...appointments];
    updated[editIndex] = editData;
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setEditIndex(null);
  };

  // Handle logout
  const handleLogout = () => {
    // Just redirect to home/landing page
    window.location.href = "/";
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Profile info (optional) */}
      <div className="profile-info">
        <h3>Profile Info</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>

      {/* Appointment List */}
      <div className="appointments-section">
        <h3>My Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <ul className="appointments-list">
            {appointments.map((appt, idx) => (
              <li key={idx} className="appointment-card">
                {editIndex === idx ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      placeholder="Name"
                    />
                    <input
                      type="date"
                      value={editData.date}
                      onChange={(e) =>
                        setEditData({ ...editData, date: e.target.value })
                      }
                    />
                    <input
                      type="time"
                      value={editData.time}
                      onChange={(e) =>
                        setEditData({ ...editData, time: e.target.value })
                      }
                    />
                    <button onClick={handleSave}>Save</button>
                  </div>
                ) : (
                  <>
                    <p>
                      <strong>{appt.name}</strong> - {appt.date} at {appt.time}
                    </p>
                    <div className="appointment-actions">
                      <button onClick={() => handleEdit(idx)}>Edit</button>
                      <button onClick={() => handleDelete(idx)}>Cancel</button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;