import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import NotFound from './components/NotFound';

const criteria = createGenerateClassName({ productionPrefix: 'ma' });

function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={criteria}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route
              exact
              path='/micro-frontend/react/container'
              component={Landing}
            />
            <Route exact path='/' component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
