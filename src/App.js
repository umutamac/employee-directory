import React, { Component } from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import TableBody from "./components/TableBody";
import TableContent from "./components/TableContent";
import employees from "./employees.json"; // copied from http://dummy.restapiexample.com/ into json file

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    ascending: true
  };

  sortNum = sortParameter => {
    const employees = this.state.employees.sort(
      (a, b) => {
        if (this.state.ascending) {
          return a[sortParameter] - b[sortParameter];
        } else {
          return b[sortParameter] - a[sortParameter];
        }
      }
    );
    this.setState({ employees });
  };

  sortString = sortParameter => {
    const employees = this.state.employees.sort(
      (a, b) => {
        if (this.state.ascending) {
          return a[sortParameter].localeCompare(b[sortParameter]);
        } else {
          return b[sortParameter].localeCompare(a[sortParameter]);
        }
      }
    );
    this.setState({ employees });
  };

  toggleOrder = () => {
    this.setState({ ascending: !this.state.ascending })
    this.setState({ employees: employees.reverse()})
  }

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <div className="wrapper">
        <Title>Employee Table</Title>
        <Button
          sortNum={this.sortNum}
          sortString={this.sortString}
          switchOrder={this.toggleOrder}
          ascendingOrder={this.state.ascending}
        />
        <TableBody>
          {this.state.employees.map((employees, i) => (
            <TableContent
              id={employees.id}
              name={employees.employee_name}
              age={employees.employee_age}
              salary={employees.employee_salary}
              key={i}
            />
          ))}
        </TableBody>
      </div>
    );
  }
}

export default App;
