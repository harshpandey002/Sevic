import { createContext, useState } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [background, setBackground] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
