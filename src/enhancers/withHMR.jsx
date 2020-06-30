import React from 'react';
import { hot, AppContainer } from 'react-hot-loader';


/**
 * HOC that provides
 * HotModuleReload + ErrorBoundary
 * the actual highest parental module must be passed for HMR to work
 */

export default function withHMR(module) {
  return (WrappedComponent) => {
    if (process.env.NODE_ENV !== 'production') {
      const Redbox = require('redbox-react').default;

      const HMRProvider = props => (
        <AppContainer errorReporter={Redbox}>
          <WrappedComponent {...props} />
        </AppContainer>
      );

      return hot(module)(HMRProvider);
    }
    return WrappedComponent;
  };
}
