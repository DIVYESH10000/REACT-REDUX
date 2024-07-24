import styles from "./Item.module.css";

const Item = ({ fItem }) => {
  return (
    <li className={`${styles["space-Item"]} list-group-item`}>
      <span className={`${styles["space-span"]}`}>{fItem}</span>
    </li>
  );
};

export default Item;
