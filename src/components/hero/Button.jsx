import styled from 'styled-components'
import { LAPTOP } from '@constants/measurements'
import { scale } from '@utilities/format'

const Button = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
  onClick: () => alert('Hello world!'),
}))`
  background: #b95d1d;
  border-radius: 5px;
  border: none;
  width: 10vw;
  height: 3vw;
  color: white;
  transition-duration: 0.2s;
  cursor: pointer;
  font-size: ${() => scale(320, 1440, 6, 18)};
  font-family: 'DM Sans', sans-serif;

  &:hover {
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  }

  @media (max-width: ${LAPTOP}) {
    width: 20vw;
    height: 5vw;
    font-size: ${() => scale(320, 1440, 9, 30)};
  }
`

export default Button
