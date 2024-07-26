import React from 'react'

const LogTable = () => {
  return (
    <div>
            <table className="log-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Expression</th>
                <th>Is Valid</th>
                <th>Output</th>
                <th>Created On</th>
                </tr>
            </thead>
            <tbody>
                {logs.map(log => (
                <tr key={log._id}>
                    <td>{log.ID}</td>
                    <td>{log.expression}</td>
                    <td>{log.isvalid ? 'Yes' : 'No'}</td>
                    <td>{log.output}</td>
                    <td>{new Date(log.created_on).toLocaleString()}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LogTable