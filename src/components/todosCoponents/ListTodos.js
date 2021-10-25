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
        <div key={todo.id}>
          <form className="list-todos d-flex">
            <div><input type="checkbox" name="mark" id="mark" /></div>
            <div className="input-group">
              <input type="text" className="input-field" name="todo" id="todo" placeholder={todo.title} readOnly />
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
