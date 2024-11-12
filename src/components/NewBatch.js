// NewBatch.js
import React, { useState } from 'react';
import './NewBatch.css';

const NewBatch = () => {
  const [batchName, setBatchName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    alert('Batch is Added');
  };

  return (
    <div className="new-batch">
      <h2>Add New Batch</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Batch Name" onChange={e => setBatchName(e.target.value)} required />
        <input type="text" placeholder="Department" onChange={e => setDepartment(e.target.value)} required />
        <input type="text" placeholder="Year" onChange={e => setYear(e.target.value)} required />
        <input type="text" placeholder="Semester" onChange={e => setSemester(e.target.value)} required />
        <input type="file" onChange={e => setFile(e.target.files[0])} required />
        <button type="submit">Add Batch</button>
      </form>
    </div>
  );
};

export default NewBatch;
