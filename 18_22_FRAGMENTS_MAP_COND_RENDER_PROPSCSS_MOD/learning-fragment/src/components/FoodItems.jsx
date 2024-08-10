import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ anyNameButSameShouldCatchInComp }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (itembomb, event) => {
    let newItems = [...activeItems, itembomb];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {anyNameButSameShouldCatchInComp.map((itembomb) => (
        <Item
          key={itembomb}
          fItem={itembomb}
          bought={activeItems.includes(itembomb)}
          handleBuyButton={(event) => onBuyButton(itembomb, event)} // () => console.log(`${itembomb} added to cart.`)
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
