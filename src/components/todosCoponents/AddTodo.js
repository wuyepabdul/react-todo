import React from 'react';

const AddTodo = () => (
  <div className="add-todos">
    <form className="add-input-form d-flex">
      <div className="input-group">
        <input type="text" className="add-input-field" name="todo" id="todo" placeholder="Add todo ..." />
      </div>
      <div className="input-group">
        <button type="submit" className="add-btn" name="todo" id="todo"> +</button>
      </div>
    </form>
  </div>
);

export default AddTodo;
