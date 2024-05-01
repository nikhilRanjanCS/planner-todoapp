import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";

import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  // const todoItems = [
  //   {
  //     name: "Go to work",
  //     dueDate: "12/12/24",
  //   },
  //   {
  //     name: "Buy groceries",
  //     dueDate: "13/12/24",
  //   },
  //   {
  //     name: "Make Youtube videos",
  //     dueDate: "14/12/24",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (task, date) => {
    // newtodo = {
    //   task:task,
    //   date:date
    // }
    let newtodoItems = [...todoItems, { name: task, dueDate: date }];
    setTodoItems(newtodoItems);
  };
  const handleDeleteButton = (todoItemName) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newtodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo addTask={handleNewItem}></AddTodo>
      <div className="items-container">
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          handleDeleteButton={handleDeleteButton}
          items={todoItems}
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
