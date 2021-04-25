import React, { Component } from "react";

class TODOLIST extends Component {
  render(props) {
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TODOLIST;