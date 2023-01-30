import { obj } from './components/List';

let newAge = obj.age + 10

function App() {
  return (
    <>
      <p>Hello</p>
      {obj.listFunc()}
      <br />
      {newAge}
    </>
  );
}

export default App;