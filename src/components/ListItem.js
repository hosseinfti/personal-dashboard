import React, { Component } from "react";

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
      <div className="listItemContainer">
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
        <button
          className="itemButton BTN"
          onClick={() => this.props.handleDelete(this.props.id)}
        >
          حذف
        </button>
      </div>
    );
  }
}
export default ListItem;

// with grid template

// return (
//     <>
//     <div>
//       <div>
//         <label style={checkedStyle}>
//           <input
//             type="checkbox"
//             checked={this.props.checked}
//             onChange={() => this.props.handleCheckboxChange(this.props.id)}
//           />
//           {this.props.content}
//         </label>
//         </div>
//         <div>
//         <button onClick={() => this.props.handleDelete(this.props.id)}>
//           حذف
//         </button>
//         </div>
//         </div>
//     </>
//   );
