import styles from "./FoodInput.module.css";

let FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.foodInput}
      type="text"
      placeholder="Enter food items here"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
