import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger action-button"
            onClick={handleDeleteItem}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
