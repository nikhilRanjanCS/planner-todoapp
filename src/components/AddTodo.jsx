import { useRef } from "react";

function AddTodo({ addTask }) {
  const nameInput = useRef();
  const dateInput = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = nameInput.current.value;
    const dueDate = dateInput.current.value;
    nameInput.current.value = "";
    dateInput.current.value = "";
    addTask(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            name="todoName"
            type="text"
            placeholder="Enter todo here.."
            ref={nameInput}
          />
        </div>
        <div className="col-4">
          <input type="date" name="dueDate" ref={dateInput} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary todo-button add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
