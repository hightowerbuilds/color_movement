
import './App.css'
import Panel from './Panel'
import { useState } from 'react'


function App() {

  const [ radius, setRadius ] = useState(0)
  const [ height, setHeight] = useState(1)
  const [ width, setWidth ] = useState(1)
  const [ placingWidth, setPlacingWidth ] = useState(width)
  
  const handleWidth = (event) => {
    setWidth(event.target.value);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  }

  const handleRadius = (event) => {
    setRadius(event.target.value);
  }



  const compBank = []
  const compGenerator = function(){
   for (let i = 0; i <= 969; i++){
    compBank.push(
    <Panel 
      width={placingWidth} 
      height={height}
      radius={radius}
    />)
   } 
   return compBank
  }
  return (
    
  <div className='container'>
  <div className='navBar'>
  <div className='features'>
   
    <p>COLOR_MOVEMENT</p>
    <input className='input' type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
    <button onClick={() => setPlacingWidth(width)}>WIDTH</button>
    <input className='input' type="number" value={height} onChange={handleHeight} />
    <input className='input' type="number" value={radius} onChange={handleRadius} />


    </div>
  </div>
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
   {compGenerator()}
  </div>
  )
  }

export default App

