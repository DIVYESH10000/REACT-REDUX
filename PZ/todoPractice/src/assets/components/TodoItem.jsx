import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, dueDate, index }) {
  const { deleteItem } = useContext(TodoItemsContext); // As contextObj has 3 things:  todoItems, addNewItem and deleteItem

  return (
    <div className="container ">
      <div className="row spaceRow">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-secondary delTodoButt"
            onClick={() => deleteItem(index)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
