import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Navigation from "./Nav";
import Shop from "./Shop";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
