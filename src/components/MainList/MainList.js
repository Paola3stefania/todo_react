import React, { Component } from "react";

// renders the list with the todos
// its a ul component
// depends of wich page is it this.props.done
// if this.props.isEditing its true .. displays a input to edit the input that was displayed

// if list its empty renders a image

// eslint-disable-next-line react/prefer-stateless-function
export default class MainList extends Component {
  render() {
    return (
      <div>
        <p>Im the mainList</p>
      </div>
    );
  }
}
