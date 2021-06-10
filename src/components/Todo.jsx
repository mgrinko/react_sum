import React from 'react';

export const Todo = ({ todo }) => {
  return <>
    <input type="checkbox" checked={todo.completed} readOnly />
    #{todo.userId} - {todo.title}
  </>
};
