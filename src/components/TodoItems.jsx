import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

// const TodoItems = ({ items }) => {
//   return (
//     <div className="container">
//       {items.map((item) => {
//         <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>;
//       })}
//     </div>
//   );
// };
// const TodoItems = ({ items }) => {
//   return (
//     <div className="container">
//       {items.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

const TodoItems = () => {
  let key = 0;
  const contextObj = useContext(TodoItemsContext);
  const items = contextObj.todoItems;

  return (
    <div>
      {items.map((item) => (
        <TodoItem key={key++} todoItem={item}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
