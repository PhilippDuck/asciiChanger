import { useState } from 'react'
import Inputs from './components/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-gradient-to-br from-myPurple to-myBlue h-screen">
      <Inputs/>
    </div>
  )
}

export default App
