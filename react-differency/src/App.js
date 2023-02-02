import { DisplayBox } from "./components/DisplayBox/DisplayBox";
import { MenuList } from "./components/MenuList/MenuList";
import "./global.css";

function App() {

  return (
    <div className="container">
      <MenuList />
      <DisplayBox diff="Low" />
    </div>
  );
}

export default App;
