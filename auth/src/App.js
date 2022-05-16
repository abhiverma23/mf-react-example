import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const criteria = createGenerateClassName({ productionPrefix: 'ma' });

function App({ history }) {
  return (
    <div>
      <StylesProvider generateClassName={criteria}>
        <Router history={history}>
          <Switch>
            <Route exact path='/auth/signin' component={Signin} />
            <Route exact path='/auth/signup' component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;