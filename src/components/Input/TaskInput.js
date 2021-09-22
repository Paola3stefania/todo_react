import React, { Component } from "react";
import { Form } from "react-bootstrap";
// recieves the new todo to create it.
// stores it in the localstorage area
// input type

// eslint-disable-next-line react/prefer-stateless-function
export default class TaskInput extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="taskInput">
            <Form.Control type="text" placeholder="New Task..." />
            <Form.Text className="text-muted">
              Write your new task to do
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
