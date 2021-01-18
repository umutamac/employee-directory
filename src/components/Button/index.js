import React from "react";
import "./style.css";

function Button(props) {
    console.log("button props");
    console.log(props);

    return (
        <div className="buttons">
            <button className="button-primary" onClick={() => props.sortNum("id")}>
                Sort by ID</button>
            <button className="button-primary" onClick={() => props.sortString("employee_name")}>
                Sort by Name</button>
            <button className="button-primary" onClick={() => props.sortNum("employee_age")}>
                Sort by Age</button>
            <button className="button-primary" onClick={() => props.sortNum("employee_salary")}>
                Sort by Salary</button>

            <button className="button-primary" onClick={() => props.switchOrder()}>
                { (props.ascendingOrder === true) ? "L > H" : "H > L" }
            </button>
        </div>
    );
}

export default Button;