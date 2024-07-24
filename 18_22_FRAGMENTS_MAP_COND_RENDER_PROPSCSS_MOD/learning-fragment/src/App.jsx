import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "Salad",
    "Green Vegetables",
    "Cheese",
    "Paneer",
    "Milk",
    "Ghee",
  ];

  // Note JSX ignores any falsy value

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage anyNameButSameShouldCatchInComp={foodItems}></ErrorMessage>
      <FoodItems anyNameButSameShouldCatchInComp={foodItems}></FoodItems>
    </>
  );
}

export default App;
