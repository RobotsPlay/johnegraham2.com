import React from 'react'

import ButtonStyles from '../styles/ButtonStyles'

const Button = ({ onClick = () => {}, label }) => (
  <ButtonStyles className="button" onClick={onClick}>
    {label}
  </ButtonStyles>
)

export default Button
