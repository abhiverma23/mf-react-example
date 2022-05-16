import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const criteria = createGenerateClassName({ productionPrefix: 'co' });
const LazyAuthApp = lazy(() => import('./components/AuthApp'));
const LazyMarketingApp = lazy(() => import('./components/MarketingApp'));
const LazyDashboardApp = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory();

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history} basename ='/micro-frontend/react/container/'>
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
                    setSignedIn(true);
                  }}
                />
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <LazyDashboardApp />
              </Route>
              <Route path='/' component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
