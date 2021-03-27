import ReactDom from "react-dom";
import React from "react";
import TemperatureCalculator from "./temperature/TemperatureCalculator.jsx";
import SearchTable from "./table/SearchTable.jsx";

const App = props => {
    return (
      <div>
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
        <TemperatureCalculator/>
        <br/>
        <SearchTable items={goods}/>
    </App>;

ReactDom.render(app, document.getElementById("root"));