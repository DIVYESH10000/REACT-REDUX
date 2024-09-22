import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center appBg">
        <Container>
          <Header />
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </Container>
      </div>
    </>
  );
}

export default App;
