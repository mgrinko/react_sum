import React from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            updateTodo={updateTodo}
          />
        </li>
      ))}
    </ul>
  );
};


