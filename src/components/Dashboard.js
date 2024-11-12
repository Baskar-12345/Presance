import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const attendanceData = [
    {
      department: 'CSE',
      year: 'III',
      section: 'A',
      semester: 'IV',
      totalStudents: 63,
      studentsPresentToday: 61,
      attendanceToday: '97.2%'
    },
    // Add more data as required
  ];

  return (
    <div className="dashboard">
      <h2>Overall Attendance Today</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Year</th>
            <th>Section</th>
            <th>Semester</th>
            <th>Total Students</th>
            <th>Students Present Today</th>
            <th>Overall Attendance Today</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr key={index}>
              <td>{data.department}</td>
              <td>{data.year}</td>
              <td>{data.section}</td>
              <td>{data.semester}</td>
              <td>{data.totalStudents}</td>
              <td>{data.studentsPresentToday}</td>
              <td>{data.attendanceToday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
