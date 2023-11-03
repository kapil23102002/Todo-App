import React, { Component } from "react";
// import TodoApp from "./todo";
// import TodoApp from "./components/TodoList";
// import TodoApp from "./components/todos";
// import TodoApp from "./components/test_todos";
import TodoApp from "./components/B_todos";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <TodoInput /> */}
        <TodoApp />
        <div className=" col-4 bg-danger"></div>
      </div>
    );
  }
}
