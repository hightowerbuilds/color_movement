import { useState } from "react";


export default function Panel(){

  function getRandomHexColor() {
    let hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let colorList = [];
  for (let i = 0; i < 5; i++) {
    colorList.push(getRandomHexColor());
  }
  
  console.log(colorList)
    
    const randomIndex = Math.floor(Math.random() * 4);
   
    const [ color, setColor ] = useState("#000000")
    const handleMouseEnter = function(){
       setColor(colorList[randomIndex])
    }
    return (

        <div onMouseEnter={handleMouseEnter}
            style={{
                fontFamily: 'monospace',
                backgroundColor: color,
                width: 8,
                height: 8,
                borderTopLeftRadius: 50,
                borderBottomRightRadius: 50
        }}>
            
        </div>
    )
}