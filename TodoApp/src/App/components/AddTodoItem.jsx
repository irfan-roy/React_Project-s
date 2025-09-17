import { useContext, useRef } from "react";
import { TodoItemsContext } from "./Store/TodoItemStore";

const AddTodoItem = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const AddTodoItemElement = useRef();
  const dueDateElement = useRef();

  const handleOnClickAddItem = () => {
    const AddTodoItem = AddTodoItemElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(AddTodoItem, dueDate);
    AddTodoItemElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="row ">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Add Todo"
          ref={AddTodoItemElement}
        />
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-outline-success"
          onClick={handleOnClickAddItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoItem;
