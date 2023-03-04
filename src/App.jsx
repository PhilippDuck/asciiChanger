import { useState } from 'react'
import Inputs from './components/Inputs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Inputs/>
    </div>
  )
}

export default App
