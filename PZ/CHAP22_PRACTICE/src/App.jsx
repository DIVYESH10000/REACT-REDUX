import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import { useState } from "react";
//"Salad", "Soup", "Sandwich"
function App() {
  let [foodItems, setFoodItems] = useState([]);

  const addFoodItem = (item) => {
    setFoodItems((prevItems) => [...prevItems, { name: item, bought: false }]);
  };

  const toggleBuyStatus = (index) => {
    let newItems = [...foodItems];
    newItems[index].bought = !newItems[index].bought;
    setFoodItems(newItems);
  };

  const removeFoodItem = (index) => {
    let newItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(newItems);
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
        <ErrorMessage foodItems={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems
          foodItems={foodItems}
          toggleBuyStatus={toggleBuyStatus}
          removeFoodItem={removeFoodItem}
        />
      </Container>
    </>
  );
}

export default App;
/*
The setFoodItems function is provided by the useState hook. It’s used to update the state in a functional component. When updating the state based on the previous state, you pass a function to setFoodItems rather than a direct value.


Example 
Here, prevItems represents the current state of foodItems.

*/
