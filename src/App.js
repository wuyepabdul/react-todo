import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import TodosContainer from './components/TodosContainer';

const App = () => (
  <Switch>
    <div className="todo-container">
      <Route exact path="/">
        <div className="navbar"><Navbar /></div>
        <div className="todos"><TodosContainer /></div>
      </Route>
    </div>
  </Switch>
);

export default App;
