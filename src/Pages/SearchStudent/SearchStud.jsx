import React, { useState } from 'react';
import axios from 'axios';
import './SearchStud.css'

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
    <div className='search-student'>
      <h2>Search Student</h2>
      <form className='search-student-form'>
        <label>
          {/* Roll Number: */}
          <input placeholder='Roll Number' type="text" value={roll} onChange={(e) => setRoll(e.target.value)} />
        </label>
        <br/>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      {studentData ? (
        <div className='search-student-result'>
          <h3 className='hd4'>Student Details</h3>
          <p>ID: {studentData.id}</p>
          <p>Name: {studentData.sname}</p>
          
        </div>
      ) : (
        <p className='cont'>No student found with the provided roll number.</p>
      )}
    </div>
  );
};

export default SearchStud;
