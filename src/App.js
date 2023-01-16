import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";


function App() {



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Home />
          </div>
        </Route>
        <Route exact path="/restaurants">
          <div className="App">
            <Restaurant />
          </div>
        </Route>
      </Switch>

    </Router>
  
  );
}

export default App;
