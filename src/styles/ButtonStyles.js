import styled from 'styled-components'

const ButtonStyles = styled.button`
  background: var(--purple);
  color: var(--white);
  border: 0.45rem solid var(--purple);
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: var(--medpurple);
    color: var(--white);
    border-color: var(--purple);
  }
`

export default ButtonStyles
