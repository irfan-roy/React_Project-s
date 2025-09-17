import TodoHeading from "./components/TodoHeading";
import TodoItems from "./components/TodoItems";
import AddTodoItem from "./components/AddTodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./components/Store/TodoItemStore";

function App2() {
  return (
    <TodoItemsContextProvider>
      <div className="container text-center">
        <TodoHeading></TodoHeading>
        <AddTodoItem></AddTodoItem>
        <TodoItems></TodoItems>
        <WelcomeMessage></WelcomeMessage>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App2;
