import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'

const initialState = { count: 0};

function reducer(state, action) {
  switch (action.type){
    case "increment":
      return {count: state.count + 1}
    default:
      return state;
  }
}

function HitungComponent(){
  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    <>
      <h1>Hitung: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment"})}>
        Tambah
      </button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HitungComponent/>)