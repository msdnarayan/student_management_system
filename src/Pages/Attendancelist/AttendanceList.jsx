import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AttendanceList.css'

const AttendanceList = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/attendance');
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <div>
      <h2 className='hd3'>Attendance Records</h2>
      <table className='atten'>
        <thead>
          <tr>
            <th>AID</th>
            <th>Roll No</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.aid}>
              <td>{record.aid}</td>
              <td>{record.rollno}</td>
              <td>{record.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
