import React, { useCallback, useMemo, useState } from 'react';
import * as todosAPI from './api/todos';

export const TodosContext = React.createContext([]);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const loadTodos = useCallback(() => {
    todosAPI.getTodos()
      .then(setTodos);
  }, []);
  const addTodo = useCallback((todoData) => {
    // const newTodo = { ...todoData, id: uuidv4() };
    // setTodos([newTodo, ...todos]);

    todosAPI.addTodo(todoData)
      .then(loadTodos)
  }, [loadTodos]);
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

  const contextValue = useMemo(() => ({
    todos,
    loadTodos,
    addTodo,
    deleteTodo,
    updateTodo,
  }), [todos, loadTodos, addTodo, deleteTodo, updateTodo]);

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
