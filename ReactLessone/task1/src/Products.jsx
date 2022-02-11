import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    return (<div className="page__content">
        <h1>Products</h1>
        <ul className="navigation">
            <li className="navigation__item">
                <Link to="/products/book">Book</Link>
            </li>
            <li className="navigation__item">
                <Link to="/products/ball">ball</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/products">
                <span>Select a product please</span>
            </Route>
            <Route path="/products/:productId" component={Product}>
            </Route>

        </Switch>
    </div>)
}


export default Products