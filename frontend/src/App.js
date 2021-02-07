import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// Import Component +
import Home from "./core/Home";
import CreateCategory from "./category/CreateCategory";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category/create" exact component={CreateCategory}></Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
