import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddAttend.css'


function AddAttend() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        rollno: '',
        attend: '',
      });
    
      const [students, setStudents] = useState([]);
    
      useEffect(() => {
        const fetchStudents = async () => {
          try {
            const response = await fetch('http://127.0.0.1:5000/addattendance');
            if (response.ok) {
              const data = await response.json();
              setStudents(data);
              
            } else {
              console.error('Failed to fetch students');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchStudents();
      }, []);  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://127.0.0.1:5000/addattendance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              rollno: formData.rollno, 
              attend: formData.attend,
            }),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);  
            setStudents(data);  
            navigate('/attendlist');
          } else {
            console.error('Failed to add attendance');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      return (
        <div className='add-attendance-container'>
          <h2>Add Attendance</h2> <br />
          <form onSubmit={handleSubmit} className='add-attendance-form'>
            <label>
            {/* Select Student */}
              <select required name="rollno" value={formData.rollno} onChange={handleChange}>
                <option value="" disabled>Select Student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.rollno}>
                    {student.sname}
                  </option>
                ))}
              </select>
            </label>
            {/* <br /> */}
            <label className='lbl1'>
                {/* Attendance  */}
              <input placeholder='Attendence' autoComplete='off' required type="text" name="attend" value={formData.attend} onChange={handleChange} />
            </label>
            {/* <br /> */}
            <div className='form-group1'>
            <button  type="submit" ><p class="submit">Add Attendence</p></button>
            </div>
          </form>
        </div>
      );
    
}

export default AddAttend
