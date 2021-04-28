import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

// Import Component +
import Home from "./core/Home";
import CreateCategory from "./category/CreateCategory";
import ManageCategory from "./category/ManageCategory";
import CreateProduct from "./product/CreateProduct";
import ProductList from "./product/ProductList";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category/create" exact component={CreateCategory}></Route>
            <Route path="/category/manage" exact component={ManageCategory}></Route>
            <Route path="/product/create" exact component={CreateProduct}></Route>
            <Route path="/product/list" exact component={ProductList}></Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
