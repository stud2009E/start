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
            <div style={{
                margin: "0.5rem 0.5rem"
            }}>
                {Type[this.props.scale]}:
                <br/>
                <input style={{width: "100%"}} value={this.props.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Temperature;