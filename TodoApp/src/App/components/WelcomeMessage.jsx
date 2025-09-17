import { useContext } from "react";
import { TodoItemsContext } from "./Store/TodoItemStore";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return <>{todoItems.length === 0 && <h3>Welcome Message</h3>}</>;
};
export default WelcomeMessage;
