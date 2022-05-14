import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#_markiting_dev_root');
  if (devRootEl) {
    mount(devRootEl);
  }
}

console.log("Inside Markiting Application");

export { mount };
