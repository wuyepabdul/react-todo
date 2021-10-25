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
      <form className="list-todos">
        <div><input type="checkbox" name="mark" id="mark" /></div>
        <div className="input-group">
          <input type="text" className="input-field" name="todo" id="todo" />
        </div>
      </form>
    </div>
  );
};

export default ListTodos;
