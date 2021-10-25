import React from 'react';
import Navbar from './components/nav/Navbar';
import TodosContainer from './components/TodosContainer';

const App = () => (
  <div className="todo-container">
    <div className="navbar"><Navbar /></div>
    <div className="todos"><TodosContainer /></div>
  </div>
);

export default App;
