import { useState } from "react";
import Item from "./Items";

let FoodItems = ({ foodItems, toggleBuyStatus, removeFoodItem }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, index) => {
    if (item.bought) {
      removeFoodItem(index);
    } else {
      toggleBuyStatus(index);
    }
  };

  return (
    <ul className="list-group">
      {foodItems.map((item, index) => (
        <Item
          key={index}
          fItem={item}
          bought={item.bought}
          handleBuyButton={() => onBuyButton(item, index)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
