import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route exact path='/micro-frontend/react/container'>
              <Redirect to='/' />
            </Route>
            <Route exact path='/' component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
