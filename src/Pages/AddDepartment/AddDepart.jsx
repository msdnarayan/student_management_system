import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddDepart.css'

const AddDepart= () => {
  const [dept, setDept] = useState('');
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/department');
        if (response.ok) {
          const data = await response.json();
          setDepartments(data);
          console.log(data);
        } else {
          console.error('Failed to fetch departments');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDepartments();
  }, []);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ dept }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        setDepartments(data);  
      } else {
        console.error('Failed to add department');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add-dept'>
      <h2>Add Department</h2>
      <form onSubmit={handleSubmit} className='add-dept-form'>
        <label>
          Department Name:
          <input type="text" name="dept" value={dept} onChange={(e) => setDept(e.target.value)} />
        </label>
        <br />
        <button type="submit" className='btn2'>Add Department</button>
      </form>
      <div className='existing-dept'>
      <h3>Existing Departments:</h3>
      <ul>
        {departments.map((department) => (
          <li key={department.cid}>{department.branch}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default AddDepart;
