import styles from "./Item.module.css";

const Item = ({ fItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   {
  //     console.log(event);
  //     console.log(`${fItem} added to cart.`);
  //   }
  // };

  return (
    <li
      className={`${styles["space-Item"]} list-group-item ${
        bought && "active"
      }`}
    >
      <span className={`${styles["space-span"]}`}>{fItem}</span>
      <button
        className={`${styles.button} btn btn-info `}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
