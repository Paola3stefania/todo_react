import React, { Component } from "react";

import Task from "../Task";
import CounterToDo from "../CounterToDo";
import Ilustration from "../Ilustration";

// renders the list with the todos
// its a ul component
// depends of wich page is it this.props.done
// if this.props.isEditing its true .. displays a input to edit the input that was displayed

// if list its empty renders a image

// Recieves the list from the App, only the texts

// eslint-disable-next-line react/prefer-stateless-function
export default class MainList extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { tasks } = this.props;
    const { handleSubmit } = this.props;
    const { pageDesc } = this.props;
    this.location = location;
    this.tasks = tasks;
    this.handleSubmit = handleSubmit;
    this.pageDesc = pageDesc;

    if (tasks) {
      // eslint-disable-next-line
      console.log(tasks);
      this.todoQuantity = Object.values(tasks).length;
    } else {
      this.todoQuantity = 0;
    }

    // eslint-disable-next-line
    console.log("props de Mainlist: ", this.props);
    // eslint-disable-next-line
    console.log("soy los tasks: ", this.tasks);
  }

  render() {
    return (
      <div className="main-list p-4">
        <p>Currently Seeing: {this.pageDesc} </p>
        <ul
          id={`task-list${this.location.pathname}`}
          key={`key_${this.location}`}
          className="list-unstyled"
          {...this.tasks}
        >
          {this.tasks &&
            this.tasks.map((todos) => {
              // eslint-disable-next-line
              console.log("todos.name is ", todos.name);
              return (
                <Task
                  id={`id_${todos.id}`}
                  key={todos.name}
                  tasks={todos}
                  handleSubmit={this.handleSubmit}
                />
              );
            })}
          {!this.tasks && <Ilustration />}
        </ul>
        <CounterToDo quantity={this.todoQuantity} />
      </div>
    );
  }
}
