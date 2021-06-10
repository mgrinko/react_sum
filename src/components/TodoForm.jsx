import React, { useState } from 'react';

export const TodoForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState(0);

  const onTitleChange = event => setTitle(event.target.value);
  const onCompletedChange = event => setCompleted(event.target.checked);
  const onUserIdChange = event => setUserId(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    onSave({ title, completed, userId });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="checkbox" checked={completed} onChange={onCompletedChange}/>
      <input type="text" value={title} onChange={onTitleChange}/>

      <select value={userId} onChange={onUserIdChange}>
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
