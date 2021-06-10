// const BASE_URL = 'http://jsonplaceholder.typicode.com';
const BASE_URL = 'https://mate-api.herokuapp.com';

export const getTodos = () => {
  return fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then(result => result.data);
};

export const addTodo = ({ title, completed, userId }) => {
  return fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({ title, completed, userId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(result => result.data);
};

export const updateTodo = ({ id, title, completed, userId }) => {
  return fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, completed, userId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(result => result.data);
};

export const deleteTodo = (todoId) => {
  return fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(result => result.data);
};

