import React from "react";
import SearchBar from "./SearchBar";
import TableHeader from "./TableHeader";
import Row from "./Row";
import GroupRow from "./GroupRow";

import "./Table.css";

class SearchTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            stocked: false
        };

        this.search = this.search.bind(this);
    }

    search(search){
        this.setState(search);
    }

    render() {
        const {search, stocked} = this.state;

        const rows = (this.props.items || [])
            .filter(item => {
                if(!stocked){
                    return true;
                }
                return item.stocked === stocked;
            })
            .filter(item => item.name.toLowerCase().includes(search));

        const rowsWithGroup = [];
        let currentCategory = "";
        rows.forEach(row => {
            if(currentCategory !== row.category){
                currentCategory = row.category;
                rowsWithGroup.push(<GroupRow key={row.category}{...row}/>);
            }
            rowsWithGroup.push(<Row key={row.category+row.name} {...row}/>);
        });

        return (
            <div className="bordered">
                <SearchBar search={this.search}/>
                <table>
                    <thead>
                        <TableHeader/>
                    </thead>
                    <tbody>
                        {rowsWithGroup}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchTable;