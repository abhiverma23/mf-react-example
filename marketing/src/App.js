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
          <Switch basename={'/micro-frontend/react/container/'}>
            <Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={Pricing} />
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
