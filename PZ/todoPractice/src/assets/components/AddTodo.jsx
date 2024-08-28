import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { FcTodoList } from "react-icons/fc";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();

    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      {/* When we're not passing the action attribute in the form, it tries to send the data to localhost */}
      <form className="row spaceRow" onSubmit={handleAddButtonClick}>
        <div className="col-4">
          <input
            ref={todoNameElement}
            className={styles.inputClass}
            type="text"
            placeholder="Enter TODO here"
          />
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="Date" />
        </div>
        <div className="col-2">
          <button
            // type="button" By default type = "Submit" in form tag

            className="btn btn-light actionButton"
            // onClick={handleAddButtoClicked} // Not needed when we're using form, we're using onSubmit={} instead. Also it's not button specific but form specific
          >
            <FcTodoList />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
