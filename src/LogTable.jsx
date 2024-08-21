import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LogTable = () => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/logs');
      setLogs(res.data);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div id='table' style={{width:'700px',margin:'10px'}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expression</th>
            <th>Valid</th>
            <th>Output</th>
            <th>Created On <br />
              Date & Time
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log._id}>
              <td>{log.id}</td>
              <td>{log.expression}</td>
              <td>{log.isValid ? 'Yes' : 'No'}</td>
              <td>{log.output}</td>
              <td>{new Date(log.createdOn).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
