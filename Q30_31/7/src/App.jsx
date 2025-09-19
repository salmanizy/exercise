import React from "react"
import ReactDOM from "react-dom/client"
import { ValueProvider, useValue } from "./Value"

const Auth = () => {
  const { value, setValue } = useValue()

  return (
    <button
      onClick={() => setValue(!value)}
      style={{ padding: "10px", fontSize: "16px" }}
    >
      {value ? "Logout" : "Login"}
    </button>
  )
}

const Status = () => {
  const { value } = useValue()
  return <h3>Status: {value ? "Sudah login" : "Belum login"}</h3>
}

const App = () => {
  return (
    <ValueProvider>
      <Auth />
      <Status />
    </ValueProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)