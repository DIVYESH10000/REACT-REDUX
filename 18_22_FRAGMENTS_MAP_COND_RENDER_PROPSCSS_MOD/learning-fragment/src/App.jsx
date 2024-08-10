import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [
  //   "Salad",
  //   "Green Vegetables",
  //   "Cheese",
  //   "Paneer",
  //   "Milk",
  //   "Ghee",
  // ];

  // State // useState() is a hook
  // useSatte() returns array with two elements.
  // element1: current State Value
  // element2: method to edit state.

  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setStateMethod = textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`);

  // OR we can use de-structuring

  // let [textToShow, setStateMethod] = useState();

  let [foodItems, setFoodItems] = useState([]); // "ApplePie", "Sandwich", "Soup"

  // Note JSX ignores any falsy value

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }

    // console.log(event);
    // setStateMethod(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage
          anyNameButSameShouldCatchInComp={foodItems}
        ></ErrorMessage>
        <FoodItems anyNameButSameShouldCatchInComp={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Choose your food wisely.</p>
      </Container> */}
    </>
  );
}

export default App;
