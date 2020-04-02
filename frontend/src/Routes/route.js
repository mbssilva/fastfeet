import React from 'react';
import { Route as RouteImported, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

function RouteExported({ component: Component, ...rest }) {
  const signed = false;

  return <RouteImported component={Component} {...rest} />;
}

RouteExported.propTypes = {
  component: propTypes.oneOfType([propTypes.element, propTypes.func])
    .isRequired,
};

export default RouteExported;
