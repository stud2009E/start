import {Transition} from "react-transition-group";
import React from "react";

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

export default FadeWrapper;
