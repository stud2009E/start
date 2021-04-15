import React from "react";
import Temperature from "./Temperature.jsx";

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, converter){
    let value = +temperature;

    if(isNaN(value)){
        return "";
    }

    value = converter(value);
    value = Math.round(value * 1000) / 1000;

    return value.toString();
}

class TemperatureCalculator extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            scale: "c",
            temperature: 0
        }

        this.temperatureChange = this.temperatureChange.bind(this);
    }

    temperatureChange({temperature, scale}){
        this.setState({
            scale: scale,
            temperature: temperature
        });
    }

    render(){
        const temperature = this.state.temperature;

        const fahrenheit = this.state.scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
        const celsius = this.state.scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

        return (
            <div style={{
                maxWidth: "15rem",
                margin: "0.5rem 0.5rem",
                border: "1px gray solid",
                borderRadius: "0.3rem"
            }}>
                <Temperature scale="f" value={fahrenheit} temperatureChange={this.temperatureChange}/>
                <Temperature scale="c" value={celsius} temperatureChange={this.temperatureChange}/>
            </div>
        );
    }
}

export default TemperatureCalculator;