import "./App.css";
import AppName from "./assets/components/AppName";
import AddTodo from "./assets/components/AddTodo";
import TodoItems from "./assets/components/TodoItems";
import ErrorHandling from "./assets/components/ErrorHandling";
import TodoItemsContextProvider from "./assets/store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todoContainer">
          <AppName />
          <AddTodo />
          <ErrorHandling />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
