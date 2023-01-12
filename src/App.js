// import Header from "./Components/Header";
// import Content from "./Components/Content/content";
// import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import Restaurant from "./Pages/Home/Restaurant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Restaurant />
          </div>
        </Route>
        <Route exact path="/home">
          <div className="App">
            <Home />
          </div>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
