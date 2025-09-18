import { createContext, useContext } from "react";

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {}
});

const Theme = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleClick}>
      {darkMode ? 'Dark' : 'Light'}
    </button>
  );
};

export { ThemeContext, Theme };
