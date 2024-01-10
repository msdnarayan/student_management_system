import React, { useState } from 'react';
import axios from 'axios';

const SearchStud = () => {
  const [roll, setRoll] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/search', { roll });
      
      if ('id' in response.data) {
        setStudentData(response.data);
      } else {
        console.error('Error searching: No student found with the provided roll number.');
        setStudentData(null);
      }
    } catch (error) {
      console.error('Error searching:', error.message);
      setStudentData(null);
    }
  };

  return (
    <div>
      <h2>Search Student</h2>
      <form>
        <label>
          Roll Number:
          <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} />
        </label>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      {studentData ? (
        <div>
          <h3>Student Details</h3>
          <p>ID: {studentData.id}</p>
          <p>Name: {studentData.sname}</p>
          
        </div>
      ) : (
        <p>No student found with the provided roll number.</p>
      )}
    </div>
  );
};

export default SearchStud;
