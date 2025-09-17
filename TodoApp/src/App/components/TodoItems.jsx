import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "./Store/TodoItemStore";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.Name}
          TodoName={item.Name}
          DueDate={item.Date}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
