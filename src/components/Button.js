import React from 'react'

import ButtonStyles from '../styles/ButtonStyles'

const Button = ({ onClick = () => {}, label, type = 'button' }) => (
  <ButtonStyles type={type} className="button" onClick={onClick}>
    {label}
  </ButtonStyles>
)

export default Button
