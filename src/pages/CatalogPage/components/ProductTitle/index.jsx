import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'components';


export default function ProductTitle({ children, href, className }) {
  return (
    <a href={href} className={className}>
      <Text>{children}</Text>
    </a>
  );
}

ProductTitle.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};
