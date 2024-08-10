import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={`${styles["foodInput"]}`}
      type="text"
      placeholder="Enter food items here"
      // Whenever someone writes anything in the input box, to track we can use
      // onChange listener
      // onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
