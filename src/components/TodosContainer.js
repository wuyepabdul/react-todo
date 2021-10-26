/* eslint-disable max-len */
import React, { useState } from 'react';
import AddTodo from './todosCoponents/AddTodo';
import Header from './todosCoponents/Header';
import ListTodos from './todosCoponents/ListTodos';

const TodosContainer = () => {
  const [todos, setTodos] = useState({
    todoList: [{
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
    }],
  });

  const addNewTodo = (event, todo) => {
    event.preventDefault();
    if (todo.title.length !== 0) {
      setTodos((prev) => ({
        todoList: [...prev.todoList, todo],
      }));
    }
  };

  const setCheck = (todo) => {
    setTodos((prev) => ({
      todoList: prev.todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    }));
  };

  const editTodo = (todo, editedTitle) => {
    setTodos((prevState) => ({
      todoList: prevState.todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, title: editedTitle };
        }
        return item;
      }),
    }));
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => ({
      todoList: prevState.todoList.filter((item) => item.id !== todo.id),
    }));
  };
  return (
    <div className="todo-container">
      <Header />
      <AddTodo addNewTodo={addNewTodo} todos={todos} />
      <ListTodos todos={todos} setTodos={setTodos} handleChange={setCheck} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodosContainer;
