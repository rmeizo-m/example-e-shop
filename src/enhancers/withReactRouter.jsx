import React from 'react';
import { StaticRouter, MemoryRouter, BrowserRouter } from 'react-router-dom';


export default function withReactRouter() {
  const Router = ({ children, baseurl }) => typeof window === 'undefined' ? (
    <StaticRouter basename="/catalog/men/">
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </StaticRouter>
  ) : (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
  return WrappedComponent => (
    (props) => (
      <Router baseurl={'/catalog/men'}>
        <WrappedComponent {...props} />
      </Router>
    )
  );
}
