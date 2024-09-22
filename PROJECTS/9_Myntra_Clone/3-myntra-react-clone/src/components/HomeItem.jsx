// import itemImage from "../images/1.jpg";
import { IoBagAdd } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  // using id present in bag to match and show add or remove button
  const bagItems = useSelector((store) => store.bag);

  const elementFound = bagItems.indexOf(item.id) >= 0; // As indexOf() returns -1 if not found
  // console.log(item.id, elementFound);

  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
    return;
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));

    return;
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn  btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <IoBagRemoveSharp /> Remove
        </button>
      ) : (
        <button type="button" className="btn-add-bag" onClick={handleAddtoBag}>
          <IoBagAdd /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
