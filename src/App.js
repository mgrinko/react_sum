import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import * as todosAPI from './api/todos';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(f, delay, ...args);
  };
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const apply = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  );

  const loadTodos = () => {
    todosAPI.getTodos()
      .then(setTodos);
  };

  useEffect(loadTodos, []);

  const addTodo = (todoData) => {
    // const newTodo = { ...todoData, id: uuidv4() };
    // setTodos([newTodo, ...todos]);

    todosAPI.addTodo(todoData)
      .then(loadTodos)
  };
  const deleteTodo = useCallback((todoId) => {
    // setTodos(current => current.filter(todo => todo.id !== todoId));

    todosAPI.deleteTodo(todoId)
      .then(loadTodos);
  }, []);
  const updateTodo = useCallback(async (updatedTodo) => {
    // const copy = [...todos];
    // const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    //
    // copy.splice(index, 1, updatedTodo);
    // setTodos(copy);

    await todosAPI.updateTodo(updatedTodo)
    loadTodos();
  }, []);

  const handleQueryChange = event => {
    setQuery(event.target.value);
    apply(event.target.value);
  };

  const visibleTodos = useMemo(() => {
    return todos.filter(
      todo => todo.title.includes(appliedQuery)
    );
  }, [appliedQuery, todos]);

  return <>
    <input type="text" value={query} onChange={handleQueryChange}/>
    {query}

    <TodoList
      todos={visibleTodos}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  </>;
};

export default App;
