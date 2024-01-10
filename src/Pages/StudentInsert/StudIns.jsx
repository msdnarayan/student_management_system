import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './StudIns.css'

function StudIns() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        rollno: '',
        sname: '',
        sem: '',
        gender: '',
        branch: '',
        email: '',
        num: '',
        address: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://127.0.0.1:5000/addstudent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Record Inserted'); 
            navigate('/studdetails');

          } else {
            console.error('Failed to insert data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
        
      };
    
      return (
        <div>
          <h2>Add Student</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Roll Number:
              <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} />
            </label>
            <br />
            <label>
              Student Name:
              <input type="text" name="sname" value={formData.sname} onChange={handleChange} />
            </label>
            <br />
            <label>
              Semester:
              <input type="text" name="sem" value={formData.sem} onChange={handleChange} />
            </label>
            <br />
            <label>
              Gender:
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
            </label>
            <br />
            <label>
              Branch:
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
              Phone Number:
              <input type="text" name="num" value={formData.num} onChange={handleChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
  
}

export default StudIns
