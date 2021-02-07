import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// Import Component +
import Home from "./core/Home";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
