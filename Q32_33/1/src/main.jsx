import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import { VoteProvider } from "./context/VoteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <VoteProvider>
          <App />
        </VoteProvider>
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
