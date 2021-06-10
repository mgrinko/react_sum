import React from 'react';

export const TodoForm = () => {
  return (
    <form>
      <input type="checkbox" />
      <input type="text" />

      <select>
        <option value="0">Choose a user</option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
        <option value="4">four</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
};
