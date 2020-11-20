import React from "react";
// import "./style.css";

function Button(props) {
    return (
        <div className="buttons">
            <button onClick={() => props.sort("id")} id="id">
                Sort by ID{props.children}</button>
            <button onClick={() => props.sort("employee_name")} id="name">
                Sort by Name{props.children}</button>
            <button onClick={() => props.sort("employee_age")} id="age">
                Sort by Age{props.children}</button>
            <button onClick={() => props.sort("employee_salary")} id="salary">
                Sort by Salary{props.children}</button>
        </div>
    );
}

export default Button;