// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NewBatch from './components/NewBatch';
import Settings from './components/Settings';
import EditAttendance from './components/EditAttendance';
import AddFaculty from './components/AddFaculty';
import './App.css';

function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="App">
      <Sidebar setView={setView} />
      <div className="main-content">
        {view === 'dashboard' && <Dashboard />}
        {view === 'newBatch' && <NewBatch />}
        {view === 'settings' && <Settings />}
        {view === 'editAttendance' && <EditAttendance />}
        {view === 'addFaculty' && <AddFaculty />}
      </div>
    </div>
  );
}

export default App;
