import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <h3 className={styles.welcomeMessage}>Work hard! Enjoy your day!!</h3>
    )
  );
};

export default WelcomeMessage;
