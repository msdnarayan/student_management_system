import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudDetails.css'

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editFormData, setEditFormData] = useState({
    rollno: '',
    sname: '',
    sem: '',
    gender: '',
    branch: '',
    email: '',
    num: '',
    address: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/studentdetails');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEditClick = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/edit/${id}`);
      const data = response.data;
      setSelectedStudent(id);
      setEditFormData(data); // Set the form data with fetched student details
    } catch (error) {
      console.error('Error fetching student data for editing:', error);
    }
  };

  const confirmDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this student?");
    if (isConfirmed) {
      handleDeleteClick(id);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.post(`http://127.0.0.1:5000/delete/${id}`);
      fetchData(); // Refresh the student list after deletion
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/edit/${selectedStudent}`, editFormData);
      console.log(response.data); 
      setSelectedStudent(null); 
      setEditFormData({
        rollno: '',
        sname: '',
        sem: '',
        gender: '',
        branch: '',
        email: '',
        num: '',
        address: '',
      });
      fetchData(); 
    } catch (error) {
      console.error('Error updating student data:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setEditFormData({
      rollno: '',
      sname: '',
      sem: '',
      gender: '',
      branch: '',
      email: '',
      num: '',
      address: '',
    });
  };


  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
       <div className={selectedStudent ? 'blur-background' : ''}>
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Sem</th>
            <th>Gender</th>
            <th>Branch</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollno}</td>
              <td>{student.sname}</td>
              <td>{student.sem}</td>
              <td>{student.gender}</td>
              <td>{student.branch}</td>
              <td>{student.email}</td>
              <td>{student.num}</td>
              <td>{student.address}</td>
              
              <td>
                <button onClick={() => handleEditClick(student.id)}>Edit</button>
                <button onClick={() => confirmDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
      {selectedStudent && (
         <div className="modal-overlay">
         <div className="modal-content">
         <button onClick={handleCloseModal}>Close</button>

          <h2>Edit Student</h2>
          <div>
            <label>Roll No:</label>
            <input type="text" name="rollno" value={editFormData.rollno} onChange={handleInputChange} />
            <br/>
            <label>Name:</label>
            <input type="text" name="sname" value={editFormData.sname} onChange={handleInputChange} />
            <br/>
            <label>Sem:</label>
            <input type="text" name="sem" value={editFormData.sem} onChange={handleInputChange} />
            <br/>
            <label>Gender:</label>
            <input type="text" name="gender" value={editFormData.gender} onChange={handleInputChange} />
            <br/>
            <label>Branch:</label>
            <input type="text" name="branch" value={editFormData.branch} onChange={handleInputChange} />
            <br/>
            <label>Email:</label>
            <input type="text" name="email" value={editFormData.email} onChange={handleInputChange} />
            <br/>
            <label>Number:</label>
            <input type="text" name="num" value={editFormData.num} onChange={handleInputChange} />
            <br/>
            <label>Address:</label>
            <input type="text" name="address" value={editFormData.address} onChange={handleInputChange} />
          </div>
          <button onClick={handleUpdate}>Update Student</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default StudentList;
