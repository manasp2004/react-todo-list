import { useState } from "react";
import "./App.css";

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [id, setId] = useState(0)
  const [todos, setTodos]: any = useState([])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todoInput === "") return;
    setTodos((todo: any) => [...todo, todoInput])
    console.log(todos)
    setTodoInput("");
    setId(id + 1);

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
        {todos.map((todo: string) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}