import React, { useState } from 'react'

function MouseTracker ({ render }){
  const [position, setPosition] = useState({ x:0, y:0});

  const handler = (e) => {
    setPosition({x: e.clientX, y: e.clientY})
  }

  return(
    <div onMouseMove={handler} style={{height: '100%', width: '100%', cursor:'crosshair', display:'flex', justifyContent:'center', alignItems:'center'}}>
      {render(position)}
    </div>
  );
}

function App () {
  return (
    <div style={{height: window.innerHeight, width: window.innerWidth}}>
      <MouseTracker render = {(position) => (
        <h1>
          Mouse Position: ({position.x}, {position.y})
        </h1>
      )}
      />
    </div>
  );
}

export default App