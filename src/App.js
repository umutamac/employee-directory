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



  sort = sortParameter => {
    const employees = this.state.employees.sort( 
      (a, b) => {
        console.log(a[sortParameter])
        return a[sortParameter].localeCompare(b[sortParameter]);
      }
   );

    this.setState({ employees });
  };



  // sortByID = id => {
  //   const employees = this.state.employees.sort(function (x, y) { return (x["id"] - y["id"]) });
  //   this.setState({ employees });
  // };
  // sortByName = name => {
  //   // const employees = this.state.employees.filter(employees => employees.id !== id);
  //   this.setState({ employees });
  // };
  // sortByAge = age => {
  //   const employees = this.state.employees.sort(function (x,y) { return (x["age"] - y["age"]) });
  //   this.setState({ employees });
  // };
  // sortBySalary = salary => {
  //   const employees = this.state.employees.sort(function (x,y) {return (x["salary"] - y["salary"])});
  //   this.setState({ employees });
  // };

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Table</Title>
        <Button sort={this.sort}></Button>
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
