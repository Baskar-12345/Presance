import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [batchDetails, setBatchDetails] = useState({
    department: 'CSE',
    year: 'III',
    section: 'A',
    semester: 'IV'
  });

  const handleBatchChange = (e) => {
    const { name, value } = e.target;
    setBatchDetails({
      ...batchDetails,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Batch details updated successfully');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleFormSubmit} className="settings-form">
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={batchDetails.department}
            onChange={handleBatchChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={batchDetails.year}
            onChange={handleBatchChange}
          />
        </label>
        <label>
          Section:
          <input
            type="text"
            name="section"
            value={batchDetails.section}
            onChange={handleBatchChange}
          />
        </label>
        <label>
          Semester:
          <input
            type="text"
            name="semester"
            value={batchDetails.semester}
            onChange={handleBatchChange}
          />
        </label>
        <button type="submit" className="submit-btn">Update Batch</button>
      </form>
    </div>
  );
}

export default Settings;
