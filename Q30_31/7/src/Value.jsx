import { createContext, useContext, useState } from "react";

const ValueContext = createContext();

export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState(false);

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  return useContext(ValueContext);
};