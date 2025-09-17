import { useState } from "react";
import ReactDOM from "react-dom/client";

function Total() {
  //arr type datanya adalah array
  const [arr, setArr] = useState([1])

  function handleClick(){
    setArr([...arr, 1])
  }

  return(
    <>
      <h1>Total Length Array: {arr.length}</h1>
      <button onClick={handleClick}>Tambah</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Total/>)