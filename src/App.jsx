import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Calculator'
import LogTable from './LogTable'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calculator/>
      </div>
    </>
  )
}

export default App
