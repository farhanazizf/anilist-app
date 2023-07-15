const ratio = 16;

const listBreakpoints: {
  [index: string]: number;
} = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
  screen320: 320,
  screen360: 360,
  screen375: 375,
  screen425: 425,
  screen414: 414,
  screen411: 411,
};

export const mqGreater = Object.keys(listBreakpoints)
  .map((key) => [key, listBreakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint / ratio}rem)`;
    return prev;
  }, {} as { [index: string]: string });

export const mqLess = Object.keys(listBreakpoints)
  .map((key) => [key, listBreakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint / 16}rem)`;
    return prev;
  }, {} as { [index: string]: string });
