import React, { lazy, Suspense, useState } from 'react';
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
const LazyDashboardApp = lazy(() => import('./components/DashboardApp'));

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={criteria}>
        <div>
          <Header
            onSignOut={() => setSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route
                path='/micro-frontend/react/container/'
                component={LazyMarketingApp}
              />
              <Route path='/auth'>
                <LazyAuthApp
                  onSingInClicked={() => {
                    console.log('action performed');
                    setSignedIn(true);
                  }}
                />
              </Route>
              <Route path='/dashboard' component={LazyDashboardApp} />
              <Route path='/' component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
