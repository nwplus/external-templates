import styled from 'styled-components'

const Button = styled.button.attrs(({ applyActive }) => ({
  type: 'button',
  disabled: applyActive,
  onClick: () => alert('Hello world!'),
}))`
  background: rgba(6, 26, 44, 0.76);
  border: 20px solid rgba(6, 26, 44, 0.76);
  border-radius: 33px;
  color: white;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  }
`

export default Button
