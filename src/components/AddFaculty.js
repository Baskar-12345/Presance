// AddFaculty.js
import React, { useState } from 'react';
import './AddFaculty.css';

const AddFaculty = () => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = () => {
    alert('Faculty Added');
  };

  return (
    <div className="add-faculty">
      <h2>Add Faculty</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Class" onChange={e => setClassName(e.target.value)} required />
        <input type="text" placeholder="Semester" onChange={e => setSemester(e.target.value)} required />
        <input type="text" placeholder="Year" onChange={e => setYear(e.target.value)} required />
        <input type="text" placeholder="Department" onChange={e => setDepartment(e.target.value)} required />
        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
};

export default AddFaculty;
