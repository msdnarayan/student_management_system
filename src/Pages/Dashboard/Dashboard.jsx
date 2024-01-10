import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link, Redirect, Navigate} from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/studdetails">All Students</Link>
          </li>
          <li>
            <Link to="/addstud">Add a Student</Link>
          </li>
          <li>
            <Link to="/addattend">Add Attendance</Link>
          </li>
          <li>
            <Link to="/adddepart">Add Department</Link>
          </li>
          <li>
            <Link to="/search">Search a Student</Link>
          </li>
          <li>
            <Link to="/attendlist">Attendance Record</Link>
          </li>


        </ul>
      </nav>
    </div>
  )
}

export default Dashboard
