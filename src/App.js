import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Config from './pages/Config';
import Game from './pages/Game';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Provider from './context/Provider';

export default function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/config" component={ Config } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="/feedback" component={ Feedback } />
      </Provider>
    </Switch>

  );
}
