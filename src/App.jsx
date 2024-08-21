import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Calculator from './Calculator'
// import LogTable from './LogTable'
import CalculatorFour from './CalculatorFour'
// import CalculatorSearch from './CalculatorSearch'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app-main'>
      <div >
          <CalculatorFour/>
          {/* <Calculator /> */}
          {/* <CalculatorSearch />
          <LogTable/> */}
          {/* <CalculatorSearch /> */}
        </div>
    </div>
  )
}

export default App
