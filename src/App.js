import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodosContext } from './TodosProvider';

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
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const { loadTodos, todos } = useContext(TodosContext);

  useEffect(() => {
    loadTodos();
  }, []);

  const apply = useCallback(
    debounce(setAppliedQuery, 1000),
    []
  );

  const handleQueryChange = event => {
    setQuery(event.target.value);
    apply(event.target.value);
  };

  const visibleTodos = useMemo(() => {
    return todos.filter(
      todo => todo.title.includes(appliedQuery)
    );
  }, [appliedQuery, todos]);
  //endregion

  return <>
    <input type="text" value={query} onChange={handleQueryChange}/>

    <TodoList todos={visibleTodos} />
  </>;
};

export default App;
