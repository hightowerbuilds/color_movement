
import './App.css'
import Panel from './Panel'

function App() {


  
  const compBank = []
  const compGenerator = function(){
   for (let i = 0; i <= 969; i++){
    compBank.push(<Panel/>)
   } 
   return compBank
  }
  return (
    
  <div  className='container'>
  <div className='navBar'>
  <div className='features'>COLOR_MOVEMENT</div>
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

