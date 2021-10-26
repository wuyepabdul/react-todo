/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ addNewTodo, todos }) => {
  const [todoItem, setTodoItem] = useState(
    {
      id: uuidv4(),
      title: '',
      completed: false,
    },
  );

  const handleChange = (e) => {
    e.preventDefault();
    setTodoItem({
      ...todoItem,
      title: e.target.value,
    });
  };
  return (
    <div className="add-todos">
      <form className="add-input-form d-flex">
        <div className="input-group">
          <input type="text" className="add-input-field" name="todo" id="todo" onChange={handleChange} placeholder="Add todo ..." />
        </div>
        <div className="input-group">
          <button type="submit" onClick={(e) => addNewTodo(e, todoItem, todos)} className="add-btn" name="todo" id="todo"> +</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
