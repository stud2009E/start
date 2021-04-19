import React,{Fragment} from "react";

export default function NavBar(props){

    let items = ["menu", 1, 2, 3, 4, 5].map(i => (
        <div key={i} className="list-item">
            <div className="item-icon">
                {i}
            </div>
            <div className="item-text">
                description
            </div>
        </div>
    ));

    items.splice(0,0,
        <div key="back" className="back"> </div>);

    return (
        <Fragment>
            {items}
        </Fragment>
    );
};