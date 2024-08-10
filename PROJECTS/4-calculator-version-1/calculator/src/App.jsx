import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonContainer";

function App() {
  return (
    <div className={styles.calculator} id="calculator">
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
