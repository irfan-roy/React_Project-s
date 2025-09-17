import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  onDeleteItem: () => {},
});

const ReduceTodoItem = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "TODO_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { Name: action.payload.ItemName, Date: action.payload.ItemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.Name !== action.payload.itemName
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, disPatchItems] = useReducer(ReduceTodoItem, []);

  const addNewItem = (ItemName, ItemDate) => {
    const AddNewItemAction = {
      type: "TODO_ITEM",
      payload: {
        ItemName,
        ItemDate,
      },
    };
    disPatchItems(AddNewItemAction);
  };

  const onDeleteItem = (TodoItemName) => {
    const DeleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: TodoItemName,
      },
    };
    disPatchItems(DeleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, onDeleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
