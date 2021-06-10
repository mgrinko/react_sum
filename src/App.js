import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import * as todosAPI from './api/todos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const loadTodos = () => {
    todosAPI.getTodos()
      .then(setTodos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = (todoData) => {
    // const newTodo = { ...todoData, id: uuidv4() };
    // setTodos([newTodo, ...todos]);

    todosAPI.addTodo(todoData)
      .then(loadTodos)
  };
  const deleteTodo = (todoId) => {
    // const filtered = todos.filter(todo => todo.id !== todoId);
    // setTodos(filtered);

    todosAPI.deleteTodo(todoId)
      .then(loadTodos);
  };
  const updateTodo = async (updatedTodo) => {
    // const copy = [...todos];
    // const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    //
    // copy.splice(index, 1, updatedTodo);
    // setTodos(copy);

    await todosAPI.updateTodo(updatedTodo)
    loadTodos();
  };

  return <>
    Add todo:
    <TodoForm saveTodo={addTodo} />
    <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  </>;
};

export default App;
