import React from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function ErrorHandling() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <React.Fragment>
      {todoItems.length === 0 ? <h1>Enjoy your day</h1> : null}
    </React.Fragment>
  );
}
export default ErrorHandling;
