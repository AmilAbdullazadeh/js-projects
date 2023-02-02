import { useState } from 'react';
import { List } from './components/List';

function App() {
  const [user, setUser] = useState({
    name: 'Amil'
  });

  function artir() {
    setUser(user.name);
  }

  return (
    <>
      <List artir={artir} />
    </>
  );
}

export default App;