import { useState } from "react";
import './Panel.css'

export default function Panel(props){

  function getRandomHexColor() {
    let hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  const randomColor = getRandomHexColor()

  console.log(randomColor);
  

    const [ color, setColor ] = useState("#000000")
   
    const handleMouseEnter = function(){
       setColor(randomColor)
    }
    return (

        <div 
        className="panel" 
        onMouseEnter={handleMouseEnter} 
        style={{ 
          backgroundColor: color,
          borderRadius: `${props.radius}%`,
          height: `${props.height}vh`,
          width: `${props.width}vh`
          }}>
            
        </div>
    )
}