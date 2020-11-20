import React from "react";
import "./style.css";

function Button(props) {
    return (
        <div className="buttons">
            <button onClick={() => props.sortNum("id")}>
                Sort by ID</button>
            <button onClick={() => props.sortString("employee_name")}>
                Sort by Name</button>
            <button onClick={() => props.sortNum("employee_age")}>
                Sort by Age</button>
            <button onClick={() => props.sortNum("employee_salary")}>
                Sort by Salary</button>
        </div>
    );
}

export default Button;