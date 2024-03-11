
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
    
  <div style={{
    display: 'flex', flexWrap: 'wrap'
  }}>
  <div style={{
    position: 'absolute',
    zIndex: 1,
    height: 100,
    width: 300,
    border: '1px beige solid',
    opacity: .6,
    margin: 10
  }}>
    <p style={{
      fontFamily: 'monospace',
      color: 'beige',
      fontSize: 16
    }}>this is for the features</p>
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

