// import React, { Component } from "react";
// import { Button, Container, Form, ListGroup, Stack } from "react-bootstrap";

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       title: "",
//       desc: "",
//     };
//   }

//   handleTitleChange = (event) => {
//     this.setState({ title: event.target.value });
//   };

//   handledescChange = (event) => {
//     this.setState({ desc: event.target.value });
//   };

//   addTodo = () => {
//     const { title, desc } = this.state;
//     if (title && desc) {
//       const newTodo = { title, desc, complete: false };
//       this.setState((prevState) => ({
//         todos: [...prevState.todos, newTodo],
//         title: "",
//         desc: "",
//       }));
//     }
//   };

//   deleteTodo = (index) => {
//     const updatedTodo = [...this.state.todos];
//     updatedTodo.splice(index, 1);
//     this.setState({ todos: updatedTodo });
//   };

//   updateTodo = (index) => {
//     const updatedTitle = prompt("Edit Title:", this.state.todos[index].title);
//     const updateddesc = prompt("Edit desc:", this.state.todos[index].desc);

//     if (updatedTitle !== null && updateddesc !== null) {
//       const updatedTodo = [...this.state.todos];
//       updatedTodo[index].title = updatedTitle;
//       updatedTodo[index].desc = updateddesc;
//       this.setState({ todos: updatedTodo });
//     }
//   };

//   markComplete = (index) => {
//     const updatedTodo = [...this.state.todos];
//     updatedTodo[index].complete = true;
//     this.setState({ todos: updatedTodo });
//   };

//   render() {
//     const { todos, title, desc } = this.state;

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
//             <Form.Label>desc</Form.Label>
//             <Form.Control
//               type="text"
//               value={desc}
//               onChange={this.handledescChange}
//             />
//           </Form.Group>
//           <Button variant="primary" onClick={this.addTodo}>
//             Submit
//           </Button>
//         </Form>

//         <ListGroup>
//           {todos.map((todo, index) => (
//             <ListGroup.Item key={index}>
//               <strong>{todo.title}</strong>: {todo.desc}
//               {!todo.complete && (
//                 <>
//                   <Stack direction="horizontal" gap={2}>
//                     <Button
//                       variant="outline-danger"
//                       className="  ms-auto"
//                       onClick={() => this.deleteTodo(index)}
//                     >
//                       Delete
//                     </Button>
//                     <Button
//                       variant="outline-info"
//                       className=""
//                       onClick={() => this.updateTodo(index)}
//                     >
//                       Update
//                     </Button>
//                     <Button
//                       variant="outline-success"
//                       className=""
//                       onClick={() => this.markComplete(index)}
//                     >
//                       Mark Complete
//                     </Button>
//                   </Stack>
//                 </>
//               )}
//               {todo.complete && (
//                 <span className="text-success ">Completed</span>
//               )}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </Container>
//     );
//   }
// }

// export default TodoApp;

import React, { Component } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoTitle: "",
      newTodoDescription: "",
      editedTodo: {},
    };
  }

  addTodo = () => {
    const { todos, newTodoTitle, newTodoDescription } = this.state;
    if (newTodoTitle && newTodoDescription) {
      const newTodo = {
        title: newTodoTitle,
        description: newTodoDescription,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        newTodoTitle: "",
        newTodoDescription: "",
      });
    }
  };

  updateTodo = () => {
    const { todos, editedTodo, newTodoTitle, newTodoDescription } = this.state;
    if (newTodoTitle && newTodoDescription) {
      const updatedTodos = todos.map((todo) =>
        todo === editedTodo
          ? { ...todo, title: newTodoTitle, description: newTodoDescription }
          : todo
      );
      this.setState({
        todos: updatedTodos,
        newTodoTitle: "",
        newTodoDescription: "",
        editedTodo: {},
      });
    }
  };

  deleteTodo = (todo) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((item) => item !== todo);
    this.setState({
      todos: updatedTodos,
    });
  };

  toggleComplete = (todo) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((item) =>
      item === todo ? { ...item, completed: !item.completed } : item
    );
    this.setState({
      todos: updatedTodos,
    });
  };

  render() {
    const { todos, newTodoTitle, newTodoDescription, editedTodo } = this.state;

    return (
      <Container>
        <h1>Todo App</h1>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              value={newTodoTitle}
              onChange={(e) => this.setState({ newTodoTitle: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="Description"
              value={newTodoDescription}
              onChange={(e) =>
                this.setState({ newTodoDescription: e.target.value })
              }
            />
          </Form.Group>
          {editedTodo.title ? (
            <Button variant="primary" onClick={this.updateTodo}>
              Update Todo
            </Button>
          ) : (
            <Button variant="success" onClick={this.addTodo}>
              Add Todo
            </Button>
          )}
        </Form>
        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item key={index}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => this.toggleComplete(todo)}
              >
                {todo.title} : {todo.description}
              </span>
              <Button
                variant="danger"
                onClick={() => this.deleteTodo(todo)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </Button>
              <Button
                variant="info"
                onClick={() => this.setState({ editedTodo: todo })}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default TodoApp;

// import React, { Component } from "react";

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       newTodo: "",
//       editedTodo: "",
//     };
//   }
// }
//   // Add a new todo
//   addTodo = () => {
//     const { todos, newTodo } = this.state;
//     if (newTodo) {
//       this.setState({
//         todos: [...todos, newTodo],
//         newTodo: "",
//       });
//     }
//   };

//   // Update an existing todo
//   updateTodo = () => {
//     const { todos, newTodo, editedTodo } = this.state;
//     if (editedTodo && newTodo) {
//       const updatedTodos = todos.map((todo) =>
//         todo === editedTodo ? newTodo : todo
//       );
//       this.setState({
//         todos: updatedTodos,
//         newTodo: "",
//         editedTodo: "",
//       });
//     }
//   };

//   // Render the todo list
//   render() {
//     const { todos, newTodo, editedTodo } = this.state;

//     return (
//       <div>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => this.setState({ newTodo: e.target.value })}
//         />
//         <button onClick={this.addTodo}>Add Todo</button>
//         <br />
//         <input
//           type="text"
//           value={editedTodo}
//           onChange={(e) => this.setState({ editedTodo: e.target.value })}
//         />
//         <button onClick={this.updateTodo}>Update Todo</button>
//       </div>
//     );
//   }
// }

// export default TodoApp;
