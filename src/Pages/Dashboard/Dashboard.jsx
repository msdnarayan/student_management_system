import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link, Redirect, Navigate} from 'react-router-dom';
import image1 from './imgs/allstudents.png';
import image2 from './imgs/student.png';
import image3 from './imgs/attendance.png';
import image4 from './imgs/department.png';
import image5 from './imgs/search.png';
import image6 from './imgs/record.png';
import './Dashboard.css';

function Dashboard() {
  const imagePaths = [image1,image2,image3,image4,image5,image6];
  return (
    <div className='dashboard'>
        <div>
          <div className='dashboard-item'> 
          <img src={imagePaths[0]} alt='' /><br/> <br/>   
            <Link to="/studdetails">All Students</Link>
          </div>
          <div className='dashboard-item'>  
          <img src={imagePaths[1]} alt='' /> <br/><br/>
            <Link to="/addstud">Add a Student</Link>
          </div>
          </div>
          <div>
          <div className='dashboard-item'>
          <img src={imagePaths[2]} alt='' /> <br/><br/>
            <Link to="/addattend">Add Attendance</Link>
          </div>
          <div className='dashboard-item'>
          <img src={imagePaths[3]} alt='' /><br/><br/> 
            <Link to="/adddepart">Add Department</Link>
          </div>
          </div>
          <div>
          <div className='dashboard-item'>
          <img src={imagePaths[4]} alt='' /> <br/><br/>
            <Link to="/search">Search a Student</Link>
          </div>
          <div className='dashboard-item'>
          <img src={imagePaths[5]} alt='' /><br/><br/>
            <Link to="/attendlist">Attendance Record</Link>
          </div>
          </div>
    </div>
  )
}

export default Dashboard
