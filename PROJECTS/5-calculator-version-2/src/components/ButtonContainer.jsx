import styles from "./ButtonContainer.module.css";

const ButtonsContainer = ({ handleButtonClick }) => {
  const arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {arr.map((buttonName) => (
          <button
            key={buttonName}
            className={styles.button}
            onClick={handleButtonClick}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
