import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import TaskInput from "../TaskInput";

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
    console.log("props de taks de lista: ", this.props);
    const { tasks } = this.props;
    this.tasks = tasks;

    const { handleSubmit } = this.props;
    this.handleSubmit = handleSubmit;
    // eslint-disable-next-line
    console.log("Im the handle submit ", this.handleSubmit);

    const { handleCLick } = this.props;
    this.handleCLick = handleCLick;
  }

  // <p>{this.tasks.text}</p>

  render() {
    return (
      <li className="d-flex">
        <Form.Check className="d-flex m-2" aria-label="radio 1" />
        <TaskInput
          {...this.tasks}
          id={`id_${this.tasks.id}`}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          draggable
        />
        <Button className="d-flex" variant="danger ml-2 mr-2">
          x
        </Button>
      </li>
    );
  }
}
