import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Text } from 'components';


export default function ProductTitle({ children, href, className }) {
  return (
    <Link to={href} className={className}>
      <Text>{children}</Text>
    </Link>
  );
}

ProductTitle.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};
