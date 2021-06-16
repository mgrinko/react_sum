import React, { useContext } from 'react';
import { TodosContext } from '../TodosProvider';
import { Todo } from './Todo';

export const TodoList = React.memo(
  ({ todos }) => {
    const { deleteTodo, updateTodo } = useContext(TodosContext);

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


