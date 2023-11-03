// import React, { Component } from "react";

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       title: "",
//       desc: "",
//     };
//   }

//   handleInputChange1 = (event) => {
//     this.setState({ title: event.target.value });
//   };

//   handleInputChange2 = (event) => {
//     this.setState({ desc: event.target.value });
//   };

//   addTodo = () => {
//     if (this.state.title.trim() !== "" && this.state.desc.trim() !== "") {
//       const todos = this.state.todos.slice();
//       todos.push(this.state.title, this.state.desc);
//       this.setState({ todos, title: "", desc: "" });
//     }
//   };

//   editTodo = (index) => {
//     const editedTodo = prompt(
//       ("Edit Task:", this.state.todos[index]),
//       this.state.todos[index]
//     );
//     if (editedTodo !== null) {
//       const todos = this.state.todos.slice();
//       todos[index] = editedTodo;
//       this.setState({ todos });
//     }
//   };

//   deleteTodo = (index) => {
//     const todos = this.state.todos.slice();
//     todos.splice(index, 1);
//     this.setState({ todos });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Todo App</h1>
//         <input
//           type="text"
//           value={this.state.title}
//           onChange={this.handleInputChange1}
//           placeholder="Add a new task"
//         />
//         <br></br>
//         <input
//           type="address"
//           value={this.state.desc}
//           onChange={this.handleInputChange2}
//           placeholder="Add Description"
//         />
//         <button onClick={this.addTodo}>Add</button>
//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button onClick={() => this.editTodo(index)}>Edit</button>
//               <button onClick={() => this.deleteTodo(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;

// // import React, { Component } from "react";
// // import TodoItem from "./TodoItem";

// // export default class TodoList extends Component {
// //   render() {
// //     return (
// //       <div>
// //         helo TodoList
// //         <TodoItem />
// //       </div>
// //     );
// //   }
// // }
