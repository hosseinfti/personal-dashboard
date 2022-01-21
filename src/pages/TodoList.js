import React, { Component } from "react";
import ListItem from "../components/ListItem";
import "../App.css";
import withRouter from "./whitRouter";
import { Helmet } from "react-helmet";
import queryString from "query-string";

class TodoList extends Component {
  constructor(props) {
    super(props);

    const { filter, search } = queryString.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    this.searchParams = {
      filter: filter || "all",
      search,
    };

    this.state = {
      todolist: [],
      addtodo: "",
      searchterm: !this.searchParams.search ? "" : search,
      searchtodolist: [],
      filter: "",
    };
  }

  replaceUrl = () => {
    let queryStrings = "";
    queryStrings = {
      filter: this.state.filter !== "all" ? this.state.filter : undefined,
      search: this.state.searchterm ? this.state.searchterm : undefined,
    };
    const queryStringsStringify = queryString.stringify(queryStrings);
    this.props.navigate(`?${queryStringsStringify}`);
  };

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
    this.setState((prevstate) => {
      return {
        todolist: newlist,
        addtodo: "",
        searchtodolist: [],
        filter: "all",
        searchterm: "",
      };
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
      let newtodolist = this.state.todolist.filter((item) => {
        return item["key"] !== itemToBeRemoved;
      });
      this.setState({
        todolist: newtodolist,
      });
      let newsearchtodolist = this.state.searchtodolist.filter((item) => {
        return item["key"] !== itemToBeRemoved;
      });
      this.setState({
        searchtodolist: newsearchtodolist,
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
    const sureToDelete = window.confirm(
      "آیا می‌خواهید همه‌ی ردیف‌ها را حذف کنید؟"
    );
    if (sureToDelete === true) {
      this.setState({
        searchtodolist: [],
        searchterm: "",
        todolist: [],
      });
    } else {
      return false;
    }
  };

  handleClearDone = () => {
    const suredelete = window.confirm(
      "آیا می‌خواهید همه‌ی فعالیت‌های انجام شده را حذف نمایید؟"
    );
    if (suredelete === true) {
      if (this.state.filter || this.state.searchterm) {
        let donesearchlist = this.state.searchtodolist.filter((item) => {
          return item["checked"] === false;
        });
        let donetodolist = this.state.todolist.filter((item) => {
          return item["checked"] === false;
        });
        this.setState({
          searchtodolist: donesearchlist,
          todolist: donetodolist,
          filter: "all",
          searchterm: "",
        });
      }
      // else if(!this.state.searchterm && this.state.filter === "all") {
      //     let done = this.state.todolist.filter((item) => {
      //       return item["checked"] === false;
      //     });
      //     this.setState({
      //       todolist: done,
      //       searchedList: done,
      //     });
      // }
    }
  };

  componentDidMount() {
    let todo = localStorage.getItem("todolist");
    if (todo) {
      this.setState(
        {
          todolist: ("todolist", JSON.parse(todo)),
        },
        () => this.handleFilter(this.searchParams.filter)
      );
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
    if (prevState.filter !== this.state.filter) {
      this.replaceUrl();
    }
    if (prevState.searchterm !== this.state.searchterm) {
      this.replaceUrl();
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
                  className="searchInput"
                  type="text"
                  value={this.state.searchterm}
                  placeholder="جستجو ..."
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
                <button
                  className={
                    this.state.filter === "all" ? `${"activeButton"}` : "BTN"
                  }
                  onClick={() => this.handleFilter("all")}
                >
                  همه‌ی فعالیت‌ها
                </button>
                <button
                  className={
                    this.state.filter === "done" ? `${"activeButton"}` : "BTN"
                  }
                  onClick={() => this.handleFilter("done")}
                >
                  انجام شده‌ها
                </button>
                <button
                  className={
                    this.state.filter === "todo" ? `${"activeButton"}` : "BTN"
                  }
                  onClick={() => this.handleFilter("todo")}
                >
                  انجام نشده‌ها
                </button>
              </fieldset>

              <fieldset className="filter2ItemContainer2">
                <legend> کدام فعالیت‌ها حذف شوند؟</legend>
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
          <Helmet>
            <title>مدیریت فعالیت‌ها</title>
          </Helmet>
        </div>
      </>
    );
  }
}
export default withRouter(TodoList);
