import ReactDom from "react-dom";
import React from "react";
import Layout from "./Layout";
import NavBar from "./Layout/NavBar";

const App = props => {
    return (
      <div className="app">
          {props.children}
      </div>
    );
}

const goods = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const app =
    <App>
        <Layout header={<h1>Header</h1>}
            nav={<NavBar/>}
        />
    </App>;

ReactDom.render(app, document.getElementById("root"));