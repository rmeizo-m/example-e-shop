export const BREAKPOINT_0 = 0;
export const BREAKPOINT_400 = 400;
export const BREAKPOINT_502 = 502;
export const BREAKPOINT_640 = 640;
export const BREAKPOINT_800 = 800;
export const BREAKPOINT_1004 = 1004;
export const BREAKPOINT_1280 = 1280;
export const BREAKPOINT_1400 = 1400;


/**
 * Lower value of breakpoint is used to enum interval,
 * last breakpoint - infinity, is used for conveniency of comparison
 */
export const breakpoints = [
  Number.MAX_VALUE, BREAKPOINT_1400, BREAKPOINT_1280, BREAKPOINT_1004, BREAKPOINT_800,
  BREAKPOINT_640, BREAKPOINT_502, BREAKPOINT_400, BREAKPOINT_0,
];


export const BREAKPOINT_SET = 'AdaptivityProvider::SetBreakpoint';
