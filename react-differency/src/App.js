import { useState } from "react";
import { DisplayBox } from "./components/DisplayBox/DisplayBox";
import { MenuList } from "./components/MenuList/MenuList";
import "./global.css";

function App() {
  const [level, setLevel] = useState("Low")

 function handleSelected (level) {
    setLevel(level)
 }
  
  return (
    <div className="container">
      <MenuList handleClick={handleSelected} level={level} />
      <DisplayBox diff={level} />
    </div>
  );
}

export default App;
