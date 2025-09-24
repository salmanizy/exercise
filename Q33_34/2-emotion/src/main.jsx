import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, Global } from "@emotion/react";
import { globalStyles, lightTheme, darkTheme } from "./theme";

function Root() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Global styles={globalStyles(theme === "light" ? lightTheme : darkTheme)} />
      <App toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
