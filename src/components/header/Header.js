/* has a todo title adn a todo switch for dark and light mode
 has a child input */

import React, { Component } from "react";
import Input from "../Input";

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>T O D O</h1>
        <Input />
      </header>
    );
  }
}
