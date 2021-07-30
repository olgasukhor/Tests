import React, { useState } from 'react';
import './App.css';





function App() {

  const URI = 'https://jsonplaceholder.typicode.com/posts';

  const fetchToDo = async () => {
    const response = await fetch(URI);
    const result = await response.json();
    return result;
  };

  const [todos, setTodos] = useState([]);
  document.addEventListener('DOMContentLoaded', () => {
    fetchToDo().then(response => {
      setTodos(response.slice(0, 4));
    });
  });
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  function Todo({ todo, index, completeTodo }) {
    return (
      <div className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </div>
    )
  }
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    )
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">

      <div className="app">
        <h1>ToDo List</h1>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              // text={todo.title}
              
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />

        </div>
      </div>
    </div>
  );
}

export default App;
