import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";

import TodoItems from "./components/TodoItems.jsx";
import "./App.css";
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.task
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (task, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        task: task,
        date: date,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (task) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        task: task,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
