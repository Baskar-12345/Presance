import React, { useState } from 'react';
import './EditAttendance.css';

const EditAttendance = () => {
  const [attendance, setAttendance] = useState([
    { studentId: 1, studentName: 'John Doe', isPresent: true },
    { studentId: 2, studentName: 'Jane Smith', isPresent: false },
    // More student data here
  ]);

  const handleAttendanceChange = (index) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index].isPresent = !updatedAttendance[index].isPresent;
    setAttendance(updatedAttendance);
  };

  return (
    <div className="edit-attendance">
      <h2>Edit Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student, index) => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.studentName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.isPresent}
                  onChange={() => handleAttendanceChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn">Save Changes</button>
    </div>
  );
}

export default EditAttendance;
