import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (location) => {
      const { pathname: nextPathname } = location;
      const { pathname: currentPathname } = history.location;

      if (nextPathname !== currentPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#_markiting_dev_root');
  if (devRootEl) {
    mount(devRootEl, { defaultHistory: createBrowserHistory() });
  }
}

console.log('Inside Markiting Application');

export { mount };
