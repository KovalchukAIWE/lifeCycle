import React, { useState } from 'react'


const HookSwitcer = () => {

const [color, setColor] = useState('grey')
const [fontSize, setFontSize] = useState(14)

  return (
    <div style={{padding: '10px', 
    width: '200px', 
    backgroundColor: color, 
    fontSize: `${fontSize}px`}}>
    Hello
    <button onClick={() => setFontSize((state) => state -2)}>-</button>
    <button onClick={() => setColor('grey')}>Dark</button>
    <button onClick={() => setColor('yellow')}>Light</button>
    <button onClick={() => setFontSize((state) => state +2)}>+</button>
    </div>
  )
}

export default HookSwitcer;