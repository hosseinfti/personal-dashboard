import React, { Component } from "react";
import ListItem from "../components/ListItem";
import "../App.css";
import {Link, Routes, Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      addtodo: "",
      searchterm: "",
      searchtodolist: [],
      filter: "all",
      editItem: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.addtodo) {
      alert("متن نمی‌تواند خالی باشد");
      return;
    }

    let newtodo = {
      key: new Date().valueOf(),
      content: this.state.addtodo,
      checked: false,
    };
    let newlist = this.state.todolist;
    newlist.push(newtodo);
    this.setState({
      todolist: newlist,
      addtodo: "",
      searchtodolist: [],
      filter: "all",
    });
  };

  handleChange = (event) => {
    this.setState({
      addtodo: event.target.value,
    });
  };

  handleCheckboxUpdate = (key) => {
    this.setState((prevstate) => {
      let checkedlist = prevstate.todolist.map((item) => {
        if (item.key === key) {
          item.checked = !item.checked;
        }
        return item;
      });
      return {
        todolist: checkedlist,
      };
    });
  };

  handleDeleteItem = (itemToBeRemoved) => {
    const sure = window.confirm("آیا از حذف کردن این ردیف مطمئن هستید؟");
    if (sure === true) {
      let newlist = [];
      let anotherlist = [];
      newlist = this.state.todolist.filter((item) => {
        return item["key"] !== itemToBeRemoved;
      });
      this.setState({
        todolist: newlist,
      });
      anotherlist = this.state.searchtodolist.filter((item) => {
        return item["key"] !== itemToBeRemoved;
      });
      this.setState({
        searchtodolist: anotherlist,
      });
    }
  };

  handleBlurItem = (itemToBeBlured, event) => {
    let editList = this.state.todolist.map((item) => {
      if (item.key === itemToBeBlured.id) {
        item.content = event.target.textContent;
      }
      return item;
    });
    this.setState({
      todolist: editList,
    });
  };

  handleSearch = (event) => {
    this.setState({
      searchterm: event.target.value,
    });
  };

  handleFilter = (value) => {
    this.setState({
      filter: value,
    });
  };

  handleClearAll = () => {
    const suredelete = window.confirm(
      "آیا می‌خواهید همه‌ی ردیف‌ها را حذف کنید؟"
    );
    if (suredelete === true) {
      this.setState({
        searchtodolist: [],
        searchterm: "",
        todolist: [],
      });
    } else {
      return false;
    }
  };

  handleClearDone = (item) => {
    const suredelete = window.confirm(
      "آیا می‌خواهید همه‌ی فعالیت های انجام شده را حذف نمایید؟"
    );
    if (suredelete === true) {
      let done = this.state.todolist.filter((item) => {
        return item["checked"] === false;
      });
      this.setState({
        todolist: done,
        searchtodolist: done,
      });
    } else {
      return false;
    }
  };

  componentDidMount() {
    let todo = localStorage.getItem("todolist");
    if (todo) {
      this.setState({
        todolist: ("todolist", JSON.parse(todo)),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("todolist", JSON.stringify(this.state.todolist));
    if (
      prevState.searchterm !== this.state.searchterm ||
      prevState.filter !== this.state.filter
    ) {
      const searchedList = this.state.todolist.filter((item) => {
        return item["content"].includes(this.state.searchterm);
      });
      if (this.state.filter === "done") {
        let filteredList = searchedList.filter((item) => {
          return item["checked"] === true;
        });
        this.setState({
          searchtodolist: filteredList,
        });
      } else if (this.state.filter === "todo") {
        let filteredList = searchedList.filter((item) => {
          return item["checked"] === false;
        });
        this.setState({
          searchtodolist: filteredList,
        });
      } else {
        this.setState({
          searchtodolist: searchedList,
        });
      }
    }
  }
  render() {
    const searchNotFoundTodo =
      this.state.searchterm.length !== 0 &&
      this.state.searchtodolist.length === 0 ? (
        <div className="warning"> موردی یافت نشد! </div>
      ) : (
        ""
      );
    const emptyList =
      this.state.todolist.length === 0 && this.state.searchterm === "" ? (
        <div className="warning">هنوز فعالیتی اضافه نشده</div>
      ) : (
        ""
      );
    const List =
      this.state.searchterm !== "" ||
      this.state.filter !== "all" ||
      this.state.searchtodolist.length !== 0
        ? this.state.searchtodolist.map((item) => {
            return (
              <ListItem
                id={item.key}
                key={item.key}
                checked={item.checked}
                content={item.content}
                handleCheckboxChange={this.handleCheckboxUpdate}
                handleDelete={this.handleDeleteItem}
                handleBlur={this.handleBlurItem}
              />
            );
          })
        : this.state.todolist.map((item) => {
            return (
              <ListItem
                id={item.key}
                key={item.key}
                checked={item.checked}
                content={item.content}
                handleCheckboxChange={this.handleCheckboxUpdate}
                handleDelete={this.handleDeleteItem}
                handleBlur={this.handleBlurItem}
              />
            );
          });

    return (
      <>
        <div></div>
        <br />
        <div>
          <div className="filterContainer">
            <div className="itemContainer1">
              <div>
                  <input
                    type="text"
                    value={this.state.searchterm}
                    placeholder="جستجو ..."
                    style={{ width: "-webkit-fill-available" }}
                    onChange={this.handleSearch}
                  />
              </div>
              <div>
                <div>فعالیت جدید را اضافه نمایید</div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.addtodo}
                    onChange={this.handleChange}
                  />
                  <input className="BTN" type="submit" value="اضافه" />
                </form>
              </div>
            </div>
            <div className="itemContainer2">
              <fieldset className="filter1ItemContainer2">
                <legend>فیلتر با ...</legend>
                <Link to="/?filter=all">
                  <button
                    className={
                      this.state.filter === "all" ? `${"activeButton"}` : "BTN"
                    }
                    onClick={() => this.handleFilter("all")}
                  >
                    همه‌ی فعالیت‌ها
                  </button>
                </Link>
                <Link to="/?filter=done">
                  <button
                    className={
                      this.state.filter === "done" ? `${"activeButton"}` : "BTN"
                    }
                    onClick={() => this.handleFilter("done")}
                  >
                    انجام شده‌ها
                  </button>
                </Link>
                <Link to="/?filter=todo">
                  <button
                    className={
                      this.state.filter === "todo" ? `${"activeButton"}` : "BTN"
                    }
                    onClick={() => this.handleFilter("todo")}
                  >
                    انجام نشده ها
                  </button>
                </Link>
              </fieldset>

              <fieldset className="filter2ItemContainer2">
                <legend> کدام فعالیت ها حذف شوند؟</legend>
                <button className="BTN" onClick={this.handleClearAll}>
                  {" "}
                  همه‌ی فعالیت‌ها
                </button>
                <button className="BTN" onClick={this.handleClearDone}>
                  انجام شده‌ها
                </button>
              </fieldset>
            </div>
          </div>
          <br />
          <div>
            <br />
            {List}
            {emptyList}
            {searchNotFoundTodo}
          </div>
        </div>

        <Routes>
          <Route path="/?filter=all" element={<TodoList />} />
          <Route path="/?filter=done" element={<TodoList />} />
          <Route path="/?filter=todo" element={<TodoList />} />
        </Routes>
      </>
    );
  }
}
export default TodoList;

// -----------------------------------------------------------------------------------------------------------
// var TextInput = React.createClass({
//   handleInput: function() {
//     var input = React.findDOMNode(this.refs.userInput)
//     this.props.saveInput(input.value)
//     input.value = ''
//   },

//   render: function() {
//     var label = this.props.label

//     return (
//       <div class="form-group">
//         <h3><label for="input-{ label }">{ label }</label></h3>
//         <input
//           type="text"
//           class="form-control"
//           id="input-{ label }"
//           ref="userInput"
//          />
//         <button onClick={ this.handleInput }>Save</button>
//       </div>
//     )
//   }
// })

// var TextField = React.createClass({

//   render: function() {
//     var label = this.props.label || 'Label'
//     var text = this.props.text || 'Nothing yet'

//     return (
//       <div>
//         <h3>{ label }</h3>
//         <p>{ text }</p>
//       </div>
//     )
//   }
// })

// var Form = React.createClass({
//   getInitialState: function() {

//     return {
//       userIsEditing: false,
//       favoriteFlavor: 'Vanilla'
//     }
//   },
//   toggleEditing: function() {
//     var userIsEditing = !this.state.userIsEditing
//     this.setState({
//       userIsEditing: userIsEditing
//     })
//     this.handleSave()
//   },
//   saveInput: function(input) {
//     this.setState({
//       favoriteFlavor: input
//     })
//   },

//   render: function() {
//     var userIsEditing = this.state.userIsEditing
//     if (userIsEditing) {
//         return (
//           <div>
//             <TextInput
//               label={ 'Favorite flavor' }
//               saveInput={ this.saveInput }
//              />
//             <button onClick={ this.toggleEditing }>Done</button>
//           </div>
//         )
//     }
//     return (
//       <div>
//         <TextField
//           label={ 'Favorite flavor' }
//           text={ this.state.favoriteFlavor }
//         />
//         <button onClick={ this.toggleEditing }>Edit</button>
//       </div>

//     )
//   }
// })

// React.render(<Form />, document.getElementById('app'))
