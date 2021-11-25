import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Config from './pages/Config';
import Game from './pages/Game';
import Login from './pages/Login';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/config" component={ Config } />
    </Switch>

  );
}
