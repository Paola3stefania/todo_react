import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FooterNav from "../FooterNav";
import CounterToDo from "../CounterToDo";

// has the counter part of the footer
// has also a footer_nav with the pages for displaying the dif todos
// has a button for clear completed tasks

// eslint-disable-next-line react/prefer-stateless-function
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <CounterToDo />
        <p>Im the footer</p>
        <FooterNav />
        <Button variant="link">Clear Completed</Button>
      </footer>
    );
  }
}
