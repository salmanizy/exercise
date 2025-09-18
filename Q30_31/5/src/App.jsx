import React, { useState } from "react";
import { ThemeContext, Theme } from "./ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#000",
          transition: "all 0.3s ease"
        }}
      >
        <h2>Toggle Theme</h2>
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
