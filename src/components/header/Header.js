/* has a todo title adn a todo switch for dark and light mode
 has a child input */

import React, { Component } from "react";
import TaskInput from "../TaskInput";

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    console.log("Im the props from header: ", this.props);
    const { handleSubmit } = this.props;
    this.handleSubmit = handleSubmit;
    // eslint-disable-next-line
    console.log("Im the props from header: ", handleSubmit);
    // this.handleSubmit()=this.props.handleSubmit();
  }

  render() {
    return (
      <header>
        <div className="header__title d-flex justify-content-between">
          <h1>T O D O</h1>
          <img
            src={require("src/components/Header/moon_icon.png")}
            alt="dark-mode"
          />
        </div>
        <TaskInput handleSubmit={this.handleSubmit} {...this.props} />
      </header>
    );
  }
}
