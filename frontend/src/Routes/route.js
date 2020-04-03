import React from 'react';
import { Route as RouteImported, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import AuthLayout from '../pages/layouts/auth';
import SignedLayout from '../pages/layouts/signed';

function RouteExported({ component: Component, ...rest }) {
  const signed = false;

  const Layout = signed ? SignedLayout : AuthLayout;

  return (
    <RouteImported
      component={() => (
        <Layout>
          <Component />
        </Layout>
      )}
      {...rest}
    />
  );
}

RouteExported.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

export default RouteExported;
