import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";

import TodoItems from "./components/TodoItems.jsx";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage.jsx";

import TodoItemsContextProvider from "./store/todo-items-store.jsx";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className="items-container">
          <WelcomeMessage></WelcomeMessage>
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
