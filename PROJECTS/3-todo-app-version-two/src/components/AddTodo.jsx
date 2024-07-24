import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row item-row">
        <div className="col-6">
          <input
            className={styles.inputClass}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input className={styles.inputClass} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success action-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
