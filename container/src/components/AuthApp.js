import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AuthApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;
        const { pathname: currentPathname } = history.location;
        if (currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn: () => console.log('Signin performed'),
    });

    history.listen(onParentNavigate);
  });

  return <div ref={ref} />;
}

export default AuthApp;
