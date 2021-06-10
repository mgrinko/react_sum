// const BASE_URL = 'http://jsonplaceholder.typicode.com';
const BASE_URL = 'https://mate-api.herokuapp.com';

export const getTodos = () => {
  return fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then(result => result.data)
};
