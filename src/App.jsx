import { useState } from 'react'
import Inputs from './components/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-gradient-to-br from-myPurple to-myBlue h-screen">
      <div className='bg-myPurple'>
          <h1 className='flex justify-center font-mono text-5xl font-bold text-white py-5'>CONVERT3R</h1>
      </div>
      <div className=''>
        <Inputs/>
      </div> 
    </div>
  )
}

export default App
