import About from "./About";
import Navigation from "./Nav";
import Shop from "./Shop";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Shop />
    </div>
  );
};

export default App;
