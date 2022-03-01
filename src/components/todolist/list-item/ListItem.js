import React, { Component } from "react";
import "./style.css"
import bin from "../../../assets/images/bin/bin.png"

class ListItem extends Component {
  render() {
    let checkedStyle = {};
    if (this.props.checked) {
      checkedStyle = {
        textDecoration: "line-through",
        color: "green",
      };
    }
    return (
      <div className="listItem">
        <input
          className="itemCheckbox"
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.handleCheckboxChange(this.props.id)}
        />
        <span
          className="itemContent"
          style={checkedStyle}
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={(event) => this.props.handleBlur(this.props, event)}
        >
          {this.props.content}
        </span>
        <img
          src={bin}
          alt="bin"
          className="itemButton BTN bin"
          onClick={() => this.props.handleDelete(this.props.id)}
        />
      </div>
    );
  }
}
export default ListItem;

