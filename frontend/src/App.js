import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// Import Component +
import Home from "./core/Home";
import CreateCategory from "./category/CreateCategory";
import ManageCategory from "./category/ManageCategory";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category/create" exact component={CreateCategory}></Route>
            <Route path="/category/manage" exact component={ManageCategory}></Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
