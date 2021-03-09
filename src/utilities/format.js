export const serialize = obj => JSON.parse(JSON.stringify(obj))

// https://css-tricks.com/snippets/css/fluid-typography/
export const scale = (minVW, maxVW, minSize, maxSize) =>
  `calc(${minSize}px + ((100vw - ${minVW}px) / (${maxVW} - ${minVW})) * (${maxSize} - ${minSize}))`
