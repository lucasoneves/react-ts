
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState(["learn react"])
  return (
    <div className="App">
      <h2>Typescript</h2>
      <Todos items={todos} />
    </div>
  );
}

export default App;
