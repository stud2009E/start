import React from "react";

function Row({name, price, stocked}){

    const style = {
        color: stocked ? "black" : "red"
    }

    return (
      <tr className="row">
          <td className="cell" style={style}>{name}</td>
          <td className="cell">{price}</td>
      </tr>
    );
}

export default Row;