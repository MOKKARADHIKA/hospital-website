import React, { useState, useEffect } from "react";
import AppointmentCard from "./AppointmentCard";

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", doctor: "", date: "", time: "", notes: "" });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored.map(a => ({ ...a, status: a.status || "Pending", notes: a.notes || "No additional notes" })));
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(appointments[index]);
  };

  const handleSave = () => {
    const updated = [...appointments];
    updated[editIndex] = editData;
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setEditIndex(null);
  };

  const handleUpdate = (index, newStatus) => {
    const updated = [...appointments];
    updated[index].status = newStatus;
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleDelete = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  const handleLogout = () => window.location.href = "/";

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="appointments-section">
        <h3>All Appointments</h3>
        {appointments.length === 0 ? <p>No appointments in the system.</p> :
          <ul className="appointments-list">
            {appointments.map((appt, idx) =>
              editIndex === idx ? (
                <li key={idx} className="appointment-card">
                  <div className="edit-form">
                    <input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} />
                    <input value={editData.doctor} onChange={e => setEditData({ ...editData, doctor: e.target.value })} />
                    <input type="date" value={editData.date} onChange={e => setEditData({ ...editData, date: e.target.value })} />
                    <input type="time" value={editData.time} onChange={e => setEditData({ ...editData, time: e.target.value })} />
                    <input value={editData.notes} onChange={e => setEditData({ ...editData, notes: e.target.value })} />
                    <button onClick={handleSave}>Save</button>
                  </div>
                </li>
              ) : (
                <AppointmentCard
                  key={idx}
                  appointment={appt}
                  role="admin"
                  onComplete={() => handleUpdate(idx, "Completed")}
                  onEdit={() => handleEdit(idx)}
                  onDelete={() => handleDelete(idx)}
                />
              )
            )}
          </ul>
        }
      </div>
    </div>
  );
}

export default AdminDashboard;