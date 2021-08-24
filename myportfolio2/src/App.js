import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//styles
import "./App.css";
//Pages
import Home from "./Pages/Home";
//Components
// import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
//Contexts
import { LangProvider } from "./Context/LangContext";
import { MenuProvider } from "./Context/MenuContext";

function App() {
  return (
    <LangProvider>
      <MenuProvider>
        <NavBar />
      </MenuProvider>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>

      {/* <Footer /> */}
    </LangProvider>
  );
}

export default App;
