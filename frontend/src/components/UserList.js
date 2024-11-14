// frontend/src/components/UserList.js
import React, { useState } from 'react';
import registrationService from '../services/registrationService';
import '../styles/UserList.css';

const UserList = ({ users, setUsers }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date_of_birth: '',
    phone_number: '',
  });

  // Format date in a more user-friendly way
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await registrationService.remove(id);
      setUsers(users.filter((user) => user.id !== id));
      alert('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user. Please try again.');
    }
  };

  // Start editing user
  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      date_of_birth: user.date_of_birth,
      phone_number: user.phone_number,
    });
  };

  // Handle form change for update
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated user data
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { ...formData, id: editingUser };
      await registrationService.update(editingUser, updatedUser);
      setUsers(users.map((user) => (user.id === editingUser ? updatedUser : user)));
      setEditingUser(null);
      alert('User updated successfully.');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user. Please try again.');
    }
  };

  return (
    <div className='userlist_component'>
      <h2>Registered Users</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {editingUser === user.id ? (
                  // Editable form for update
                  <>
                    <td>{user.id}</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdateSubmit}>Save</button>
                      <button onClick={() => setEditingUser(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  // Display user info with edit/delete buttons
                  <>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{formatDate(user.date_of_birth)}</td> {/* Format the date here */}
                    <td>{user.phone_number}</td>
                    <td>
                      <button onClick={() => handleEditClick(user)}>Edit</button>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users registered yet!</p>
      )}
    </div>
  );
};

export default UserList;
