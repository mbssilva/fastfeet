import React from 'react';
import { Route as RouteImported, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import AuthLayout from '../pages/layouts/auth';
import SignedLayout from '../pages/layouts/signed';

function RouteExported({ component: Component, isPrivate, ...rest }) {
  const signed = useSelector((state) => state.session.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

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
  isPrivate: propTypes.bool,
};

RouteExported.defaultProps = {
  isPrivate: false,
};

export default RouteExported;
