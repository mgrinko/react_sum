import React from 'react';
import { Todo } from './Todo';

export const TodoList = React.memo(
  ({ todos, deleteTodo, updateTodo }) => {
    console.log('Rendering TodoList');

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
  }
);


