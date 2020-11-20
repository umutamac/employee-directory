import React from "react";
import "./style.css";

function TableContent(props) {
    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.salary}</td>
            </tr>
    );
}

export default TableContent;
