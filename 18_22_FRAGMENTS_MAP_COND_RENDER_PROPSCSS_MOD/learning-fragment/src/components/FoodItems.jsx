import Item from "./Item";

const FoodItems = ({ anyNameButSameShouldCatchInComp }) => {
  return (
    <ul className="list-group">
      {anyNameButSameShouldCatchInComp.map((itembomb) => (
        <Item key={itembomb} fItem={itembomb}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
