import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";

import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

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
  const addNewItem = (task, date) => {
    // newtodo = {
    //   task:task,
    //   date:date
    // }

    setTodoItems((currValue) => {
      let newtodoItems = [...currValue, { name: task, dueDate: date }];
      return newtodoItems;
    });
  };
  const deleteItem = (todoItemName) => {
    const newtodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newtodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className="items-container">
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
