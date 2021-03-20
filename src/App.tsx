import { useState } from "react";
import "./App.css";

function App() {
  let id = 0;
  const [todoInput, setTodoInput] = useState("");

  let todos: string[] = ["Sidd"];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    todos.push(todoInput);
    setTodoInput("");
    console.log(todos);
    console.log(e.target[0].value);
    id += 1;
    // todos.push(e.target[0].value);
    // console.log(e)
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
