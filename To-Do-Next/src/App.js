import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./definitions/todo.model";

function App() {
  const [todos, setTodos] = useState([]);

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const activeTasks = todos.filter(task => task.isCompleted === false);
  const completedTasks = todos.filter(task => task.isCompleted === true);

  const createTodo = (text) => {
    setTodos([new Todo(text), ...activeTasks, ...completedTasks]);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(data => {
        const slicedData = data.slice(0, 4);
        setTodos(slicedData.map((item) =>
          new Todo(item.title)
        ));
      });

    return () => { };
  }, []);

  return (
    <div className="App">
      <div className="app">
        <h1>ToDo List</h1>

        <TodoList
          todos={todos}
          onComplete={completeTodo}
          onRemove={removeTodo}
          createToDo={createTodo}
        />

        <TodoForm onSubmit={createTodo} />
      </div>
    </div>
  );
}

export default App;
