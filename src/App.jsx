import ReactDom from "react-dom";
import React from "react";
import TemperatureCalculator from "./temperature/TemperatureCalculator";
import SearchTable from "./table/SearchTable";
import { Transition } from 'react-transition-group';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {
        opacity: 1,
        color: "green"
    },
    entered:  { opacity: 1 },
    exiting:  {
        opacity: 0,
        color: "red"
    },
    exited:  { opacity: 0 },
};

class FadeWrapper extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            inProp: true
        }

        this.click = this.click.bind(this);
    }

    click() {
        this.setState({
            inProp: !this.state.inProp
        });
    }

    render(){
        return (
            <div onClick={this.click}>
                <Transition in={this.state.inProp} timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            I'm a fade Transition!
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}


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
        <FadeWrapper/>
        <TemperatureCalculator/>
        <br/>
        <SearchTable items={goods}/>
    </App>;

ReactDom.render(app, document.getElementById("root"));