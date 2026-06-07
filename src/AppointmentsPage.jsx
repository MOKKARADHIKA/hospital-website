// src/AppointmentsPage.jsx
import React, { useState, useEffect } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import "./AppointmentsPage.css";

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const handleDelete = (index) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleComplete = (index) => {
    const updated = [...appointments];
    updated[index].status = "Completed";
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData({ ...appointments[index] });
  };

  const handleSave = () => {
    const updated = [...appointments];
    updated[editingIndex] = { ...editData };
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setEditingIndex(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditData({});
  };

  return (
    <div className="dashboard-container">
      <h1>All Booked Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Email</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr
                key={index}
                className={appt.status === "Completed" ? "completed-row" : ""}
              >
                {editingIndex === index ? (
                  <>
                    <td><input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /></td>
                    <td><input type="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} /></td>
                    <td><input type="text" value={editData.doctor} onChange={(e) => setEditData({ ...editData, doctor: e.target.value })} /></td>
                    <td><input type="date" value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} /></td>
                    <td><input type="time" value={editData.time} onChange={(e) => setEditData({ ...editData, time: e.target.value })} /></td>
                    <td>
                      <span className={`status-badge ${editData.status.toLowerCase()}`}>
                        {editData.status}
                      </span>
                    </td>
                    <td><input type="text" value={editData.notes} onChange={(e) => setEditData({ ...editData, notes: e.target.value })} /></td>
                    <td>
                      <button className="icon-btn save" onClick={handleSave}><FaCheck /></button>
                      <button className="icon-btn cancel" onClick={handleCancel}>✖</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.doctor}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>
                      <span className={`status-badge ${appt.status.toLowerCase()}`}>
                        {appt.status}
                      </span>
                    </td>
                    <td>{appt.notes}</td>
                    <td>
                      <button
                        className="icon-btn complete"
                        onClick={() => handleComplete(index)}
                        disabled={appt.status === "Completed"}
                        title="Complete"
                      >
                        <FaCheck />
                      </button>
                      <button className="icon-btn edit" onClick={() => handleEdit(index)} title="Edit">
                        <FaEdit />
                      </button>
                      <button className="icon-btn delete" onClick={() => handleDelete(index)} title="Delete">
                        <FaTrash />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentsPage;