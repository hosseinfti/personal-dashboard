import React, { Component } from "react";
import ListItem from "../Components/ListItem";
import "../App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      addtodo: "",
      searchterm: "",
      searchtodolist: [],
      filter: "all",
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

      !this.state.searchterm
        ? (newlist = this.state.todolist)
        : (newlist = this.state.searchtodolist);

      let anotherlist = newlist.filter((item) => {
        return item["key"] !== itemToBeRemoved;
      });

      !this.state.searchterm
        ? this.setState({
            todolist: anotherlist,
          })
        : this.setState({
            searchtodolist: anotherlist,
          });
    }
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
      this.state.searchterm &&
      (!this.state.todolist
        .map((item) => item["content"])
        .includes(this.state.searchterm) ||
        !this.state.searchtodolist
          .map((item) => item["content"])
          .includes(this.state.searchterm)) ? (
        <div className="warning"> موردی یافت نشد </div>
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
              />
            );
          });

    return (
      <>
        <div style={{ display: "grid", placeItems: "center" }}>
          <input
            type="text"
            value={this.state.searchterm}
            placeholder="جستجو ..."
            style={{ width: "-webkit-fill-available" }}
            onChange={this.handleSearch}
          />
        </div>
        <br />
        <fieldset>
          <legend>فیلتر با ...</legend>
          <button
            className={this.state.filter === "all" ? `${"activeButton"}` : ""}
            onClick={() => this.handleFilter("all")}
          >
            همه‌ی فعالیت‌ها
          </button>
          <button
            className={this.state.filter === "done" ? `${"activeButton"}` : ""}
            onClick={() => this.handleFilter("done")}
          >
            انجام شده‌ها
          </button>
          <button
            className={this.state.filter === "todo" ? `${"activeButton"}` : ""}
            onClick={() => this.handleFilter("todo")}
          >
            انجام نشده ها
          </button>
        </fieldset>
        <br />
        <fieldset>
          <legend> کدام فعالیت ها حذف شوند؟</legend>
          <button onClick={this.handleClearAll}> همه‌ی فعالیت‌ها</button>
          <button onClick={this.handleClearDone}>انجام شده‌ها</button>
        </fieldset>
        <br />
        <div>فعالیت جدید را اضافه نمایید</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.addtodo}
            onChange={this.handleChange}
          />
          <input type="submit" value="اضافه" />
        </form>
        <br />
        {List}
        {emptyList}
        {searchNotFoundTodo}
      </>
    );
  }
}
export default TodoList;
