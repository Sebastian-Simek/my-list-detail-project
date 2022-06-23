import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import PokemonApp from './PokemonPage';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <PokemonApp />
          </Route>
          <Route exact path='/pokemon-details/:id'> 
            <PokemonDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

