import React from 'react';
import AddTodo from './todosCoponents/AddTodo';
import Header from './todosCoponents/Header';
import ListTodos from './todosCoponents/ListTodos';

const TodosContainer = () => (
  <div>
    <Header />
    <AddTodo />
    <ListTodos />
  </div>
);

export default TodosContainer;
