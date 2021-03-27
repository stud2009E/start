import React from "react";

const Type = {
    c: "Celsius",
    f: "Fahrenheit"
}

class Temperature extends React.Component{

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev){
        const value = ev.target.value;

        this.props.temperatureChange({
            scale: this.props.scale,
            temperature: value
        });
    }

    render() {
        return (
            <div>
                {Type[this.props.scale]}:
                <br/>
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Temperature;