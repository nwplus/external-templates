export const MOBILE = '425px'
export const TABLET = '786px'
export const LAPTOP = '1024px'

// https://css-tricks.com/snippets/css/fluid-typography/
export const scale = (minVW, maxVW, minSize, maxSize) =>
  `calc(${minSize}px + ((100vw - ${minVW}px) / (${maxVW} - ${minVW})) * (${maxSize} - ${minSize}))`
