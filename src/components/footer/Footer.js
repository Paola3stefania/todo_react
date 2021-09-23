import React, { Component } from "react";
import { Button } from "react-bootstrap";

import FooterNav from "../FooterNav";
import CounterToDo from "../CounterToDo";

import { clearCompleted, startDemo } from "../../utils/demo";

// has the counter part of the footer
// has also a footer_nav with the pages for displaying the dif todos
// has a button for clear completed tasks

// *TODO cambiar los estados del Main asi renderiza solo sin el Link

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    console.log("soy las props del footer", this.props);
    const { tasks } = this.props;
    if (tasks) {
      // eslint-disable-next-line
      console.log(tasks);
      this.todoQuantity = Object.values(tasks).length;
    } else {
      this.todoQuantity = 0;
    }
  }

  render() {
    return (
      <footer>
        <CounterToDo quantity={this.todoQuantity} />
        <FooterNav />
        <Button onClick={() => startDemo()}>Demo</Button>
        <Button onClick={() => clearCompleted()}>Clear Completed</Button>
        <Button onClick={() => localStorage.clear()}>Clear All</Button>
      </footer>
    );
  }
}
