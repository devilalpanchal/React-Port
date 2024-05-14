import { useState } from 'react'
import './App.css'
import Header from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h3 style={{color:'white'}}>Devid React Portfolio</h3> */}
      <Header/>
    </>
  )
}

export default App
