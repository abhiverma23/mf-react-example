import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#_markiting_dev_root');
  if (devRootEl) {
    mount(devRootEl, {});
  }
}

console.log('Inside Markiting Application');

export { mount };
