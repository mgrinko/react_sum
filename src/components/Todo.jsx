import React, { useState } from 'react';
import { TodoForm } from './TodoForm';

export const Todo = ({ todo, onDelete, updateTodo }) => {
  const [isEditing, setEditing] = useState(false);

  const startEditing = () => setEditing(true);
  const finishEditing = () => setEditing(false);

  const saveTodo = (formData) => {
    updateTodo({ ...todo, ...formData });
    finishEditing();
  };

  if (isEditing) {
    return <>
      <TodoForm todo={todo} saveTodo={saveTodo} />
      <button onClick={finishEditing}>Cancel</button>
    </>;
  }

  return <>
    <button onClick={onDelete}>Del</button>
    <button onClick={startEditing}>Edit</button>
    <input type="checkbox" checked={todo.completed} readOnly />
    #{todo.userId} - {todo.title}
  </>;
};
