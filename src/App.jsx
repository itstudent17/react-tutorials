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
        {/* problem with / represented in all path routes */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
};

export default App;
