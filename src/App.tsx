import { useState } from "react";
import "./App.css";

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [id, setId] = useState(0);
  const [todos, setTodos]: any = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todoInput === "") return;
    setTodos((todo: any) => [...todo, todoInput]);
    console.log(todos);
    setTodoInput("");
    setId(id + 1);

    // console.log(e)
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    console.log(e);
    e.target.style.color = "rgb(30, 30, 30)";
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
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
          <li key={id} onClick={handleDelete}>
            {todo}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}
