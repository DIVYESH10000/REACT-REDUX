import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItems({ handleDeleteChange }) {
  const { todoItems } = useContext(TodoItemsContext); // As contextObj has 3 things:  todoItems, addNewItem and deleteItem

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((iterator, index) => (
        <TodoItem
          index={index}
          key={index}
          todoName={iterator.name}
          dueDate={iterator.dueDate}
          handleDeleteChange={handleDeleteChange}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
