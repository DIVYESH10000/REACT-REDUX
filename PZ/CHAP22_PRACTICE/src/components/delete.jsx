
`App.jsx`
// Update App.jsx to handle the logic for toggling item state and removing items.

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (item) => {
    setFoodItems((prevItems) => [...prevItems, { name: item, bought: false }]);
  };

  const toggleItem = (itemName) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (itemName) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      addFoodItem(newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage foodItems={foodItems.map(item => item.name)} />
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems
          foodItems={foodItems}
          toggleItem={toggleItem}
          removeItem={removeItem}
        />
      </Container>
    </>
  );
}

export default App;

`FoodItems.jsx`
// Update FoodItems.jsx to handle the toggle and remove functionality.

import Item from "./Items";

const FoodItems = ({ foodItems, toggleItem, removeItem }) => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item.name}
          fItem={item}
          handleButtonClick={() => item.bought ? removeItem(item.name) : toggleItem(item.name)}
          buttonText={item.bought ? "Remove" : "Buy"}
        />
      ))}
    </ul>
  );
};

export default FoodItems;


`Items.jsx`
// Update Items.jsx to handle the button text and click event properly.

import styles from "./Items.module.css";

const Item = ({ fItem, handleButtonClick, buttonText }) => {
  return (
    <li
      className={`${styles["space-Item"]} list-group-item ${fItem.bought ? "active" : ""}`}
    >
      <span className={`${styles["space-span"]}`}>{fItem.name}</span>
      <span>
        <button
          className={`${styles["space-span"]} btn btn-info`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </span>
    </li>
  );
};

export default Item;

/*
Summary of Changes
App.jsx: Added functions to handle adding, toggling, and removing food items. Updated state management to handle food items as objects with name and bought properties.

FoodItems.jsx: Passed the toggle and remove functions as props to the Item component and adjusted to handle different button texts.

Items.jsx: Updated to show "Buy" or "Remove" based on the bought state of the item and to handle the button click accordingly.

With these changes, when you click "Buy", it will toggle to "Remove" and clicking "Remove" will delete the item from the list.

*/