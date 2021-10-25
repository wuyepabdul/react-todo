import React from 'react';

const ListTodos = () => {
  const todos = [{
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  }];
  return (
    <div>
      {console.log(todos)}
      {todos.map((todo) => (
        <div className="list-todos-container" key={todo.id}>
          <form className="list-todos d-flex">
            <div className="list-input-group d-flex">
              <div><input type="checkbox" name="mark" id="mark" /></div>
              <input type="text" className="input-field" name="todo" id="todo" value={todo.title} />
            </div>
            <div><i className="fas fa-trash" /></div>
          </form>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
