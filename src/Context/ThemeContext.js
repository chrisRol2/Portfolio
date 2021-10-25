import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

const ThemeContext = createContext();

const sistemDefaultTheme = () => {
  return "light";
  // return window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "light";
};

const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : sistemDefaultTheme
  );
  const [themeObj, setThemeObj] = useState(theme === "dark" ? dark : light);

  const changeTheme = (data) => {
    if (data === "light") setTheme("light");
    else setTheme("dark");
    localStorage.setItem("theme", data);
  };

  const data = {
    themeSel: theme,
    changeTheme,
    theme: themeObj,
  };

  useEffect(() => {
    setThemeObj(theme === "dark" ? dark : light);
  }, [theme]);

  return (
    <ThemeContext.Provider value={data}>
      <ThemeProvider theme={themeObj}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
const light = {
    navBg: "#ffffff80",
    navShadow: "rgba(0, 0, 0, 0.2)",
    fontColor: "#000",
    bodyBg: "#ffffff",
    bgWColor: "#000",
    cardShadow: "rgba(0, 0, 0, 0.3)",
    cardBgColor: "#f6f6f6",
    textShadow: "text-shadow: 0px 0px 0px #fc7bc8",
  },
  dark = {
    navBg: "#cccccc80",
    navShadow: "rgba(0,0, 0, 0.0)",
    fontColor: "#fff",
    bodyBg: "#0F0F11",
    bgWColor: "#000",
    // cardShadow: "rgba(252, 123, 200, 0.3)",
    cardShadow: "rgba(255,255, 255, 0.3)",
    cardBgColor: "#f6f6f6",
    textShadow: "text-shadow: 0px 0px 5px #fc7bc8",

    // cardBgColor: "#eee",
  };

export { MyThemeProvider };
export default ThemeContext;
