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

function App() {
  useEffect(() => {
    // console.clear();
    // console.log("Hola, andas buscando algo por aqui?");
  });
  return (
    <MyThemeProvider>
      <LangProvider>
        <MenuProvider>
          <NavBar />
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
