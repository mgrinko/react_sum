import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos, onTodoDelete }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDelete={() => onTodoDelete(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};


