
import './App.css'
import Panel from './Panel'
import { useState } from 'react'


function App() {

  const [ radius, setRadius ] = useState(0)
  const [ height, setHeight] = useState(1)
  const [ width, setWidth ] = useState(1)
  const [ placingWidth, setPlacingWidth ] = useState(1);
  const [ placingHeight, setPlacingHeight ] = useState(1);
  const [ placingRadius, setPlacingRadius ] = useState(0);



  const compBank = []
  const compGenerator = function(){
   for (let i = 0; i <= 969; i++){
    compBank.push(
    <Panel 
      width={placingWidth} 
      height={placingHeight}
      radius={placingRadius}
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
    <button className='inputButton' onClick={() => setPlacingWidth(width)}>SET WIDTH</button>
    <input className='input' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
    <button className='inputButton' onClick={() => setPlacingHeight(height)}>SET HEIGHT</button>
    <input className='input' type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
    <button className='inputButton' onClick={() => setPlacingRadius(radius)}>SET CORNER RADIUS: 1-50 </button>

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

