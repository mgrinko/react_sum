import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import { getTodos } from './api/todos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const addTodo = ({ title, completed, userId }) => {
    const newTodo = { title, completed, userId, id: uuidv4() };
    setTodos([newTodo, ...todos]);
  };

  return <>
    Add todo:
    <TodoForm onSave={addTodo} />
    <TodoList todos={todos} />
  </>;
};

export default App;
