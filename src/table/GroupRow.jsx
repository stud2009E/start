import React from "react";

export default ({category}) => {

    const style = {
        fontWeight: "bold"
    }

    return (
      <tr>
          <td colSpan={2} style={style}>
              {category}
          </td>
      </tr>
    );
}