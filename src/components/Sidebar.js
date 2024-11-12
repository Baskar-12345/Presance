// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setView }) => {
  return (
    <div className="sidebar">
      <div className="menu-icon">
        <span>☰</span>
      </div>
      <h2>Admin</h2>
      <ul>
        <li onClick={() => setView('dashboard')}>Dashboard</li>
        <li onClick={() => setView('newBatch')}>New Batch</li>
        <li onClick={() => setView('settings')}>Settings</li>
        <li onClick={() => setView('editAttendance')}>Edit Attendance</li>
        <li onClick={() => setView('addFaculty')}>Add Faculty</li>
      </ul>
    </div>
  );
};

export default Sidebar;
