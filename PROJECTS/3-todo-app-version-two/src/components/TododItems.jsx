import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((iterator, index) => (
          <TodoItem
            key={index}
            todoDate={iterator.dueDate}
            todoName={iterator.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
