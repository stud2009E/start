import ReactDom from "react-dom";
import React from "react";

const el = (name) => {
    return (<div >
        <h1>Hello, {name}</h1>
    </div>);
}



ReactDom.render(el("Sasha"), document.getElementById("root"));