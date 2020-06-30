import React from 'react';

/**
 * Only fire once before first render, this is not a desired approach,
 * but acceptable in some cases, e.g.: to populate store before first render
 */
export default function useWillMount(fn) {
  const firstRender = React.useRef(true);
  if (firstRender.current) {
    fn();
    firstRender.current = false;
  }
}
