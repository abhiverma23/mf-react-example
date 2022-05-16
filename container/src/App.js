import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const criteria = createGenerateClassName({ productionPrefix: 'co' });
const LazyAuthApp = lazy(() => import('./components/AuthApp'));
const LazyMarketingApp = lazy(() => import('./components/MarketingApp'));

function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={criteria}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route
                path='/micro-frontend/react/container/'
                component={LazyMarketingApp}
              />
              <Route path='/auth' component={LazyAuthApp} />
              <Route path='/' component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
