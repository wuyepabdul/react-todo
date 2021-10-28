import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import TodosContainer from './components/TodosContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

const App = () => (
  <div className="d-flex">
    <Navbar />
    <Switch>
      <Route exact path="/">
        <TodosContainer />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </div>

);

export default App;
