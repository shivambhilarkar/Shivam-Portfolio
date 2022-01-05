import Container from "./Components/Outline/Container";
import Nav_header from "./Components/Outline/Navbar";
import About_comp from "./Components/Parts/About";
import Skill_comp from "./Components/Parts/Skiils";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { __RouterContext } from "react-router";
import Contact_comp from "./Components/Parts/Contact";
import Project_com from "./Components/Parts/Project_comp";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav_header />

        <Switch>
          <Route path="/skills">
            <Skill_comp />
          </Route>
          <Route path="/projects">
            <Project_com />
          </Route>
          <Route path="/contact">
            <Contact_comp />
          </Route>
          <Route path="/">
            <About_comp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
