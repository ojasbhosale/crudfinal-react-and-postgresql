// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';
import registrationService from './services/registrationService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await registrationService.getAll();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<RegistrationForm addUser={addUser} />} />
          <Route path="/register" element={<RegistrationForm addUser={addUser} />} />
          <Route path="/user-list" element={<UserList users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
