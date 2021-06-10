import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

// const BASE_URL = 'http://jsonplaceholder.typicode.com';
const BASE_URL = 'https://mate-api.herokuapp.com';

const getTodos = () => {
  return fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then(result => result.data)
};

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return <>
    Add todo: <TodoForm />
    <TodoList todos={todos} />
  </>;
};

export const TodoList = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export const Todo = ({ todo }) => {
  return <>
    <input type="checkbox" checked={todo.completed} readOnly />
    #{todo.userId} - {todo.title}
  </>
};

export const TodoForm = () => {
  return (
    <form>
      <input type="checkbox" />

      <input type="text" />

      <select>
        <option value="0">Choose a user</option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
        <option value="4">four</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
};

export default App;
