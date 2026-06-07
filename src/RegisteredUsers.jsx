import React, { useEffect, useState } from "react";
import "./RegisteredUsers.css";

const RegisteredUsers = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Delete user
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Start editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  // Change edit fields
  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value
    });
  };

  // Save edited user
  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEditIndex(null);
  };

  // Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">

      <h2 className="users-title">Registered Users</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search user..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <table className="users-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user, index) => (
              <tr key={index}>

                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        name="name"
                        value={editUser.name}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <input
                        name="email"
                        value={editUser.email}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <input
                        name="phone"
                        value={editUser.phone}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <input
                        name="password"
                        value={editUser.password}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <button className="save-btn" onClick={handleSave}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.password}</td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
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
};

export default RegisteredUsers;