import React from 'react';

export const Todo = ({ todo, onDelete }) => {
  return <>
    <button onClick={onDelete}>Del</button>
    <button>Edit</button>
    <input type="checkbox" checked={todo.completed} readOnly />
    #{todo.userId} - {todo.title}
  </>
};
