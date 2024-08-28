import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

function todoItemsReducer(currTodoItems, action) {
  let newtodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newtodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoItems = currTodoItems.filter((_, i) => i !== action.payload.index);
  }
  return newtodoItems;
}

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM", // What Changed
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (index) => {
    // Creating ActionObject
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        index,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
