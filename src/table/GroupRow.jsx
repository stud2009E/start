import React from "react";

export default ({category}) => {

    const style = {
        fontWeight: "bold"
    }

    return (
      <tr className="row rowGroup">
          <td colSpan={2} style={style}>
              {category}
          </td>
      </tr>
    );
}