import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Father from "./components/Father";
import Son from "./components/Son";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Father color="orange">
        <Son />
      </Father>
    </>
  );
}

export default App;
