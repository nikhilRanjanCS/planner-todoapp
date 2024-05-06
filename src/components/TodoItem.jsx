import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoItem }) {
  //   console.log(todoName);
  //   console.log(todoDate);
  const contextObj = useContext(TodoItemsContext);
  const handleDeleteButton = contextObj.deleteItem;
  return (
    <div className="row todo-row">
      <div className="col-6">{todoItem.name}</div>
      <div className="col-4">{todoItem.dueDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger todo-button"
          onClick={() => handleDeleteButton(todoItem.name)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
