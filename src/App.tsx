import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListView from './features/List/ListView';
import DetailsView from './features/Details/DetailsView';

import './App.scss';


const App: React.FC = () => {

  return (
    <div className="App" onScroll={() => console.log('tu')}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListView />
          </Route>
          <Route exact path="/books/:id">
            <DetailsView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
