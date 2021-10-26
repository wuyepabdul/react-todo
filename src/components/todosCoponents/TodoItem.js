/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const TodoItem = ({
  todo, todos, handleChange, editTodo, deleteTodo,
}) => {
  const [editState, setEditState] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo, e.target.value);
  };

  const setClassName = (todo) => `input-field ${todo.completed && 'completed'}`;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(e.key);
      setEditState(!editState);
    }
  };
  return (
    <div>
      <form className="list-todos d-flex">
        <div className="list-input-group d-flex">
          <div>
            <input
              type="checkbox"
              name="mark"
              onChange={(e) => {
                e.preventDefault();
                handleChange(todo, todos);
              }}
              checked={todo.completed}
            />
          </div>
          <input
            type="text"
            onChange={handleEdit}
            onDoubleClick={() => setEditState(!editState)}
            onKeyDown={handleKeyDown}
            className={setClassName(todo)}
            name="todo"
            value={todo.title}
            readOnly={editState}
          />
        </div>
        <div>
          <i
            role="button"
            aria-label="c"
            className="fas fa-trash"
            onClick={() => deleteTodo(todo, todos)}
          />
          {' '}
        </div>
      </form>
    </div>
  );
};

/* TodoItem.propTypes = {
  todo: PropTypes.shape({}),
};
 */
export default TodoItem;
