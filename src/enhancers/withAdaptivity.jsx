import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWindowWidth, simulateResize } from './helpers';


/**
 * Listens resize to determine resolution, and pushes current breakpoint value into store
 */
export default function withAdaptivity({ breakpoints, setBreakpoint, getBreakpoint }) {
  return (WrappedComponent) => {
    class ResizeListener extends React.Component {
      state = { isReady: false };
      /**
       * initially loads Desktop to properly handle React.hydrate
       * afterwards
       */
      componentDidMount() {
        window.addEventListener('resize', this.updateBreakpoint);
        this.updateBreakpoint();
      }

      /**
       * this function fires each time after setBreakpoint updated the react tree
       * we simulate resize at this point in order to fix possible issues caused by late react tree re-render
       */
      componentDidUpdate() {
        simulateResize();
      }

      updateBreakpoint = () => {
        const windowWidth = getWindowWidth();
        const { breakpoint, onSetBreakpoint } = this.props;

        /** find closest breakpoint that we are surpassed in width */
        const newBreakpoint = breakpoints.find(bp => bp <= windowWidth);

        /** only call dispatcher if value changed */
        if (breakpoint !== newBreakpoint) {
          onSetBreakpoint(newBreakpoint);
        }
        if (!this.state.isReady) this.setState({ isReady: true });
      };

      render() {
        return this.state.isReady ? (
          <WrappedComponent />
        ) : null;
      }
    }

    ResizeListener.propTypes = {
      breakpoint: PropTypes.number,
      onSetBreakpoint: PropTypes.func,
    };


    const mapStateToProps = state => ({
      breakpoint: getBreakpoint(state),
    });

    const mapDispatchToProps = ({
      onSetBreakpoint: setBreakpoint,
    });

    return connect(mapStateToProps, mapDispatchToProps)(ResizeListener);
  };
}

