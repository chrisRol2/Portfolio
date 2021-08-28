import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext();

const sistemDefaultTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? dark
    : light;

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : sistemDefaultTheme
  );

  const changeTheme = (data) => {
    if (data === "light") setTheme(light);
    else setTheme(dark);
  };

  const data = {
    theme,
    changeTheme,
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={data}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
const light = {
    bgColor: "red",
  },
  dark = {
    bgColor: "blue",
  };

export { MyThemeProvider };
export default ThemeContext;
