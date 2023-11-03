// import React, { Component } from "react";
// import { Button, Container, Form, ListGroup } from "react-bootstrap";

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
//       "Edit Desc:",
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
//       <Container>
//         <Form>
//           <Form.Group>
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               value={title}
//               onChange={this.handleTitleChange}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               type="text"
//               value={description}
//               onChange={this.handleDescriptionChange}
//             />
//           </Form.Group>
//           <Button variant="primary" onClick={this.addTodo}>
//             Submit
//           </Button>
//         </Form>

//         <ListGroup>
//           {todos.map((todo, index) => (
//             <ListGroup.Item key={index}>
//               <strong>{todo.title}</strong>: {todo.description}
//               {!todo.complete && (
//                 <>
//                   <Button
//                     variant="danger"
//                     className="ml-2"
//                     onClick={() => this.deleteTodo(index)}
//                   >
//                     Delete
//                   </Button>
//                   <Button
//                     variant="info"
//                     className="ml-2"
//                     onClick={() => this.updateTodo(index)}
//                   >
//                     Update
//                   </Button>
//                 </>
//               )}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </Container>
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
