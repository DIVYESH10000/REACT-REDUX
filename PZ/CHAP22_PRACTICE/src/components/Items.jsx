import styles from "./Items.module.css";

const Item = ({ fItem, handleBuyButton }) => {
  return (
    <li
      className={`${styles["space-Item"]} list-group-item ${
        fItem.bought ? "active" : ""
      }`}
    >
      <span
        className={`${styles["space-span"]} btn ${
          fItem.bought ? "btn-danger" : "btn-success"
        }`}
      >
        {fItem.name}
      </span>
      <span>
        <button
          className={`${styles["space-span"]} btn btn-info`}
          onClick={handleBuyButton}
        >
          {fItem.bought ? "Remove" : "Buy"}
        </button>
      </span>
    </li>
  );
};

export default Item;
