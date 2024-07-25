import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState(''); // State for input display
    const [result, setResult] = useState(''); // State for result display

    // Function to handle button clicks
    const handleClick = (value) => {
        if (value === 'AC') {
            setInput('');
            setResult('');
        } else if (value === 'DEL') {
            setInput(input.slice(0, -1));
        } else if (value === '=') {
            try {
                const res = eval(input);
                setResult(res);
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div id='main'>
            <div className="calculator">
                <div>
                    <input type="text" value={input} placeholder="0" readOnly />
                    <div id="resultBox" className="result">{result}</div>
                </div>
                <div>
                    <button className="operator" onClick={() => handleClick('AC')}>AC</button>
                    <button className="operator" onClick={() => handleClick('%')}>%</button>
                    <button className="operator" onClick={() => handleClick('DEL')}>DEL</button>
                    <button className="operator" onClick={() => handleClick('/')}>/</button>
                </div>
                <div>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button className="operator" onClick={() => handleClick('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button className="operator" onClick={() => handleClick('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button className="operator" onClick={() => handleClick('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => handleClick('00')}>00</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button className="operator" onClick={() => handleClick('.')}>.</button>
                    <button className="operator eql" onClick={() => handleClick('=')}>=</button>
                </div>
            </div>
            <div id='table'>
                <table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Expression</th>
                        <th>Valid</th>
                        <th>Output</th>
                        <th>Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {logs.map(log => (
                        <tr key={log._id}>
                            <td>{log._id}</td>
                            <td>{log.expression}</td>
                            <td>{log.is_valid ? 'Yes' : 'No'}</td>
                            <td>{log.output}</td>
                            <td>{new Date(log.created_on).toLocaleString()}</td>
                        </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// // export default Calculator;
// import React, { useState,useEffect } from 'react';
// import './Calculator.css';
// import axios from 'axios';

// const Calculator = () => {
//   const [input, setInput] = useState(''); // State for input display
//   const [result, setResult] = useState(''); // State for result display
//   const [logs, setLogs] = useState([]); // State to store logs

//   // Function to handle button clicks
//   const handleClick = (value) => {
//     if (value === 'AC') {
//       setInput('');
//       setResult('');
//     } else if (value === 'DEL') {
//       setInput(input.slice(0, -1));
//     } else if (value === '=') {
//       evaluateExpression();
//     } else {
//       setInput(input + value);
//     }
//   };

//   // Function to evaluate expression
//   const evaluateExpression = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/api/logs', { expression: input });
//       setResult(res.data.message);
//       fetchLogs(); // Refresh logs after successful evaluation
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   // Function to fetch logs
//   const fetchLogs = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/logs');
//       setLogs(res.data);
//     } catch (error) {
//       console.error('Error fetching logs:', error);
//     }
//   };
//   // Initial fetch of logs on component mount
//   useEffect(() => {
//     fetchLogs();
//   }, []);


//   return (
//     <div id='main'>
//       <div className="calculator">
//         {/* Calculator UI code */}
//             <div>
//                 <input type="text" value={input} placeholder="0" readOnly />
//                     <div id="resultBox" className="result">{result}</div>
//                 </div>
//                 <div>
//                     <button className="operator" onClick={() => handleClick('AC')}>AC</button>
//                     <button className="operator" onClick={() => handleClick('%')}>%</button>
//                     <button className="operator" onClick={() => handleClick('DEL')}>DEL</button>
//                     <button className="operator" onClick={() => handleClick('/')}>/</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleClick('7')}>7</button>
//                     <button onClick={() => handleClick('8')}>8</button>
//                     <button onClick={() => handleClick('9')}>9</button>
//                     <button className="operator" onClick={() => handleClick('*')}>*</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleClick('4')}>4</button>
//                     <button onClick={() => handleClick('5')}>5</button>
//                     <button onClick={() => handleClick('6')}>6</button>
//                     <button className="operator" onClick={() => handleClick('-')}>-</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleClick('1')}>1</button>
//                     <button onClick={() => handleClick('2')}>2</button>
//                     <button onClick={() => handleClick('3')}>3</button>
//                     <button className="operator" onClick={() => handleClick('+')}>+</button>
//                 </div>
//                 <div>
//                     <button onClick={() => handleClick('00')}>00</button>
//                     <button onClick={() => handleClick('0')}>0</button>
//                     <button className="operator" onClick={() => handleClick('.')}>.</button>
//                     <button className="operator eql" onClick={() => handleClick('=')}>=</button>
//                 </div>
//             </div>
//       <div id='table'>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Expression</th>
//               <th>Valid</th>
//               <th>Output</th>
//               <th>Created On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logs.map(log => (
//               <tr key={log._id}>
//                 <td>{log._id}</td>
//                 <td>{log.expression}</td>
//                 <td>{log.isValid ? 'Yes' : 'No'}</td>
//                 <td>{log.output}</td>
//                 <td>{new Date(log.createdOn).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Calculator;
