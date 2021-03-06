import React from "react";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onChange(ev){
        this.props.search({
            [ev.target.name]: ev.target.value
        });
    }

    onSubmit(ev){
        ev.preventDefault();
    }

    onCheckboxChange(ev){
        this.props.search({
            [ev.target.name]: ev.target.checked
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="search" autoComplete="off" onChange={this.onChange} placeholder="Search..."/>
                <div>
                    <label>
                        <input type="checkbox" name="stocked" onChange={this.onCheckboxChange}/>
                        Only show products in stock
                    </label>
                </div>
            </form>
        );
    }
}

export default SearchBar;