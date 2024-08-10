// Here we used useRef instead of useState to prevent repaint everytime any change was made.

import { useRef } from "react"; // useState,
import styles from "./AddTodo.module.css";
import { BiSolidMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setDueDate] = useState("");
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`No of upadtes are: ${noOfUpdates.current}`);
  //   // console.log(noOfUpdates);
  // };

  // This will handle after we click Add Button
  const handleAddButtonClick = (event) => {
    // console.log(event);
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    // console.log(`${todoName} due on date: ${todoDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, todoDate);
    // setTodoName("");
    // setDueDate("");
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
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            className={styles.inputClass}
            type="date"
            // value={todoDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit" // By default also it's submit but can change acc to use
            // type="button"

            className="btn btn-success action-button"
            // onClick={handleAddButtonClick}
          >
            <BiSolidMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
