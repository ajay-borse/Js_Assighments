import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = 'http://localhost:5000/api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch registered users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('Failed to load registered users.');
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in both name and email.');
      return;
    }

    try {
      const response = await axios.post(API_BASE_URL, {
        name: name.trim(),
        email: email.trim(),
      });

      // Dynamically append new user to the list
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding user:', error);
      const msg = error.response?.data?.message || 'Failed to add user. Please try again.';
      setErrorMessage(msg);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="heading">Full-Stack User Manager (MERN)</h1>

        <form onSubmit={handleAddUser} className="user-form">
          <input
            type="text"
            className="input-field"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="input-field"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errorMessage && <div className="error-text">{errorMessage}</div>}

          <button type="submit" className="submit-btn">
            Add User
          </button>
        </form>

        <hr className="divider" />

        <h2 className="subheading">Registered Users ({users.length})</h2>

        <div className="user-list">
          {users.length === 0 ? (
            <p className="empty-text">No users registered yet.</p>
          ) : (
            users.map((user) => (
              <div key={user._id || user.email} className="user-item">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
