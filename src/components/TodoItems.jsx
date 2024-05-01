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

const TodoItems = ({ items, handleDeleteButton }) => {
  let key = 0;
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={key++}
          todoItem={item}
          handleDeleteButton={handleDeleteButton}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
