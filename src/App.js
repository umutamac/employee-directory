import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Button from "./components/Button";
import TableBody from "./components/TableBody";
import TableContent from "./components/TableContent";
import employees from "./employees.json"; // copied from http://dummy.restapiexample.com/ into json file

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  sortNum = sortParameter => {
    const employees = this.state.employees.sort(
      (a, b) => {
        return a[sortParameter] - b[sortParameter];
      }
    );
    this.setState({ employees });
  };

  sortString = sortParameter => {
    const employees = this.state.employees.sort(
      (a, b) => {
        return a[sortParameter].localeCompare(b[sortParameter]);
      }
    );
    this.setState({ employees });
  };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Table</Title>
        <Button
          sortNum={this.sortNum}
          sortString={this.sortString}
        />
        <TableBody>
          {this.state.employees.map(employees => (
            <TableContent
              id={employees.id}
              name={employees.employee_name}
              age={employees.employee_age}
              salary={employees.employee_salary}
            />
          ))}
        </TableBody>
      </Wrapper>
    );
  }
}

export default App;
