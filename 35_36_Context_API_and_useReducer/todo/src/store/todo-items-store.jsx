import { createContext } from "react"; // import createContext package
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
}); // Creating Context object from createContext method also we can pass initial state in the method

function todoItemsReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((_, i) => i !== action.payload.index);
  }

  return newTodoItems;
}

const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // Creating Action Item]
    const newItemAction = {
      type: "NEW_ITEM", // Tells what kinda action it is, it can be anything as long as its unique.
      payload: {
        // It's better approach to put everything inside payload so we won't have to extract from action object.
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);

    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  const deleteItem = (index) => {
    // Creating Action object
    const deleteActionObject = {
      type: "DELETE_ITEM",
      payload: {
        index,
      },
    };

    dispatchTodoItems(deleteActionObject);
  };
  return (
    <>
      <TodoItemsContext.Provider
        value={{
          // When key and val are same, can only pass one
          // todoItems: todoItems,
          // addNewItem: addNewItem,
          // deleteItem: deleteItem,
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};
export default TodoItemsContextProvider;
