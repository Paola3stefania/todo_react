import React, { Component } from "react";

// displays the task
// its a li component
// has a left button that indicates if the task is completed or not
// has a right button for deleting the task
// has the texxt of the todo

// eslint-disable-next-line react/prefer-stateless-function
export default class Task extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    console.log("props de taks: ", this.props);
    const { tasks } = this.props;
    this.tasks = tasks;
  }

  render() {
    return (
      <li>
        <p>{this.tasks.text}</p>
      </li>
    );
  }
}
