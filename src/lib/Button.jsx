import styled from 'styled-components'
import { LAPTOP } from '@constants/measurements'
import { scale } from '@utilities/format'

const Button = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
}))`
  background: #b95d1d;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-size: ${() => scale(320, 1440, 6, 18)};
  font-family: 'DM Sans', sans-serif;
  margin: auto 1vw;
  padding: 10px 15px;
  transition-duration: 0.2s;
  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  }

  @media (max-width: ${LAPTOP}) {
    font-size: ${() => scale(320, 1440, 12, 30)};
  }
`

export default Button
