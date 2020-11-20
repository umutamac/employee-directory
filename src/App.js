import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableBody from "./components/TableBody";
import TableContent from "./components/TableContent";
import employees from "./employees.json"; // copied from http://dummy.restapiexample.com/ into json file

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.friends.filter(employees => employees.id !== id);
    // Set this.state.friends equa l to the new friends array
    //this.state.friends = friends DO NOT DO THIS
    this.setState({ employees: employees });
  };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Table</Title>
        <TableBody>
          {this.state.employees.map(employees => (
            <TableContent
              //removeFriend={this.removeFriend}
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
