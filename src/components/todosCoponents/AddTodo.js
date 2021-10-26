/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AddTodo = ({ addNewTodo, todos }) => {
  const [todoItem, setTodoItem] = useState(
    {
      id: 0,
      title: '',
      completed: false,
    },
  );

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
