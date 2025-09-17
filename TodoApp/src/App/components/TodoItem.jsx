import { useContext } from "react";
import { TodoItemsContext } from "./Store/TodoItemStore";

const TodoItem = ({ TodoName, DueDate }) => {
  const { onDeleteItem } = useContext(TodoItemsContext);
  return (
    <div className="row ">
      <div className="col-6">{TodoName}</div>
      <div className="col-4">{DueDate}</div>
      <div className="col-2">
        <button
          className="btn btn-outline-danger"
          onClick={() => onDeleteItem(TodoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
