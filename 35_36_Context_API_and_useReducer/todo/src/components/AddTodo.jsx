// Here we used useRef instead of useState to prevent repaint everytime any change was made.

import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiSolidMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClick = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row item-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={styles.inputClass}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            className={styles.inputClass}
            type="date"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success action-button">
            <BiSolidMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
