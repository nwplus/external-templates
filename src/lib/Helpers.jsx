import styled from 'styled-components'

// Add spacing between components
export const Spacers = styled.div`
  width: ${p => p.width ?? '0px'};
  height: ${p => p.height ?? '0px'};
`

// Limits the rate at which a function can be called
// Avoids too many renders on scroll for example
export function debounce(func, wait, immediate) {
  var timeout

  return function() {
    var context = this, args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
