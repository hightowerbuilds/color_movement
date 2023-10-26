import { useState } from 'react'
import './App.css'

function App() {

const [ color, setColor ] = useState('green')
const handleMouseEnter = function(){
  color === 'green' ? setColor('red') : setColor('green') 
}

  return (
    <>
  <div onMouseEnter={handleMouseEnter} style={{
    fontFamily: 'monospace',
    backgroundColor: color
  }}>
    pattern 1
  </div>
    </>
  )
}

export default App
