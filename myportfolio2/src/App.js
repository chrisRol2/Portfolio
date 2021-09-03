import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
//styles
import "./App.scss";
//Pages
import Home from "./Pages/Home";
//Components
// import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
//Contexts
import { LangProvider } from "./Context/LangContext";
import { MenuProvider } from "./Context/MenuContext";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import { MyThemeProvider } from "./Context/ThemeContext";
import { createGlobalStyle } from "styled-components";
import MenuDesp from "./Components/MenuDesp";

const GlobalStyles = createGlobalStyle`

body {
  color: ${({ theme }) => theme.fontColor} ;
  background-color: ${({ theme }) => theme.bodyBg};
  transition: color 0.5s, background-color 0.5s,box-shadow 0.5s;
}

`;

function App() {
  useEffect(() => {
    // console.clear();
  });
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <LangProvider>
        <MenuProvider>
          <NavBar />
          <MenuDesp />
        </MenuProvider>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Projects />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </LangProvider>
    </MyThemeProvider>
  );
}

export default App;
