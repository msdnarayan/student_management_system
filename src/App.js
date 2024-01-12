import './App.css';
import { BrowserRouter as Router, Route,Routes, Link, Navigate} from 'react-router-dom';

import StudIns from './Pages/StudentInsert/StudIns'
import AddAttend from './Pages/AddAttendance/AddAttend';
import AddDepart from './Pages/AddDepartment/AddDepart';
import StudDetails from './Pages/StudentDetails/StudDetails';
import Triggers from './Pages/Triggers/Triggers';
import SearchStud from './Pages/SearchStudent/SearchStud';
import Signup from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import { useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import AttendanceList from './Pages/Attendancelist/AttendanceList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    return <Navigate to="/login" />;
  };
  

  
  return (
    <Router>
    <div>
    
      <nav className='topnav'>
        <div >
          <ul>
            <li>
            <Link  to="/">Dashboard</Link>
            </li>
            <li>
            <Link to="/studdetails">Students</Link>
            </li>
            <li>
            <Link to="/triggers">Triggers</Link>
            </li>
            <li>
          {isLoggedIn && <button onClick={handleLogout} className='btn1'>Logout</button>}
          </li>

          </ul>
        </div>
      </nav>
          
      <hr />

       <Routes>
       {!isLoggedIn ? (
            <>
                  <Route path="/" element={<Login onLogin={handleLogin} />} exact />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            </>
          ) :(
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/studdetails" element={<StudDetails />} />
              <Route path="/search" element={<SearchStud />} />
              <Route path="/triggers" element={<Triggers />} />
              <Route path="/addstud" element={<StudIns />} />
              <Route path="/adddepart" element={<AddDepart />} />
              <Route path="/addattend" element={<AddAttend />} />
              <Route path="/attendlist" element={<AttendanceList />} />

            </>
          )}
       </Routes>
     
    </div>
  </Router>
  );
}

export default App;
