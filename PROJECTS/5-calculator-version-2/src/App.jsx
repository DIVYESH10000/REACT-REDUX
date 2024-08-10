import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  // Handle button click events
  const handleButtonClick = (event) => {
    const buttonValue = event.target.textContent;
    if (buttonValue === "=") {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        // Display error if evaluation fails
        setDisplayValue("Error");
      }
    } else if (buttonValue === "C") {
      setDisplayValue(""); // Clear Display
    } else {
      // Append the button value to the display
      setDisplayValue(
        (displayValue) => displayValue + event.target.textContent
      );
    }

    console.log(event.target.textContent);
  };

  return (
    <div className={styles.calculator} id="calculator">
      <Display value={displayValue}></Display>
      <ButtonsContainer
        handleButtonClick={handleButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
