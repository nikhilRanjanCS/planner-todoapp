import { MdDelete } from "react-icons/md";

function TodoItem({ todoItem, handleDeleteButton }) {
  //   console.log(todoName);
  //   console.log(todoDate);
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
