import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((iterator, index) => (
          <TodoItem
            key={index}
            itemNo={index}
            todoDate={iterator.dueDate}
            todoName={iterator.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
