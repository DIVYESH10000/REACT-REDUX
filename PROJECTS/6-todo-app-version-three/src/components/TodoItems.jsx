import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((iterator, index) => (
          <TodoItem
            key={index}
            todoDate={iterator.dueDate}
            todoName={iterator.name}
            handleDeleteItem={() => onDeleteClick(index)}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
