import styled from 'styled-components'

const ButtonStyles = styled.button`
  background: var(--green);
  color: var(--white);
  border: 0.45rem solid var(--orange);
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: var(--verylightgreen);
    color: var(--green);
    border-color: var(--lightgreen);
  }
`

export default ButtonStyles
