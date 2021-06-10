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

  const addTodo = (todoData) => {
    const newTodo = { ...todoData, id: uuidv4() };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (todoId) => {
    const filtered = todos.filter(todo => todo.id !== todoId);
    setTodos(filtered);
  };

  const updateTodo = (updatedTodo) => {
    const copy = [...todos];
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);

    copy.splice(index, 1, updatedTodo);
    setTodos(copy);
  };

  return <>
    Add todo:
    <TodoForm onSave={addTodo} />
    <TodoList
      todos={todos}
      onTodoDelete={deleteTodo}
      onTodoUpdate={updateTodo}
    />
  </>;
};

export default App;
