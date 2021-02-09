import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import Playground from "./pages/playground/playground.component";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/playground' component={Playground}/>
        </Switch>
    </div>
  );
}

export default App;
