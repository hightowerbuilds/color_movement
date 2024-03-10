
import './App.css'
import Panel from './Panel'

function App() {
  const compBank = []
  const compGenerator = function(){
   for (let i = 0; i <= 15000; i++){
    compBank.push(<Panel/>)
   } 
   return compBank
  }
  return (
    
  <div style={{
    display: 'flex', flexWrap: 'wrap'
  }}>
    
   {compGenerator()}
 
  </div>

  )
  }

export default App
