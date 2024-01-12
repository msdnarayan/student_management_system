import React, { useState, useEffect } from 'react';
import './Triggers.css';

const Triggers = () => {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/triggers');
        if (response.ok) {
          const data = await response.json();
          setTriggers(data);
        } else {
          console.error('Failed to fetch triggers');import React, { useState, useEffect } from 'react';
import './Triggers.css';

const Triggers = () => {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/triggers');
        if (response.ok) {
          const data = await response.json();
          setTriggers(data);
        } else {
          console.error('Failed to fetch triggers');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2 className='hd2'>Triggers</h2>
      <table className='trigg'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Action</th>
            <th>Timestamp</th>
           
          </tr>
        </thead>
        <tbody>
          {triggers.map((trigger) => (
            <tr key={trigger.tid}>
              <td>{trigger.tid}</td>
              <td>{trigger.rollno}</td>
              <td>{trigger.action}</td>
              <td>{trigger.timestamp}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Triggers;


        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Triggers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Action</th>
            <th>Timestamp</th>
           
          </tr>
        </thead>
        <tbody>
          {triggers.map((trigger) => (
            <tr key={trigger.tid}>
              <td>{trigger.tid}</td>
              <td>{trigger.rollno}</td>
              <td>{trigger.action}</td>
              <td>{trigger.timestamp}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Triggers;

