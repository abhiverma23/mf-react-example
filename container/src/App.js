import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const criteria = createGenerateClassName({ productionPrefix: 'co' });

function App() {
  return (
    <BrowserRouter basename ='/micro-frontend/react/container/'>
      <StylesProvider generateClassName={criteria}>
        <div>
          <Header />
          <Switch>
            <Route
              path='/micro-frontend/react/container/'
              component={MarketingApp}
            />
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
