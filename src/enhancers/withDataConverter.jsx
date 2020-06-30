import React from 'react';


/**
 * HOC for converting incoming data to new format
 * */
export default dataConverter => WrappedComponent => props => <WrappedComponent {...dataConverter(props)} />;
