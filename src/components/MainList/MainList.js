import React, { Component } from "react";

import Task from "../Task";
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
    this.location = location;
    this.tasks = tasks;
    // eslint-disable-next-line
    console.log(this.props);
    // eslint-disable-next-line
    console.log("soy los tasks: ", this.tasks);
  }

  render() {
    return (
      <div>
        <p>IM THE LIST FOR: {this.location.pathname} </p>
        <ul {...this.tasks}>
          {this.tasks &&
            this.tasks.map((todos) => {
              return <Task key={todos.id} tasks={todos} />;
            })}
          {!this.tasks && <Ilustration />}
        </ul>
      </div>
    );
  }
}
