import React from 'react'
import { ButtonContainer } from './style'

export const Button = ({onClickFunction, children}) => {
  return (
    <ButtonContainer> 
        <button onClick={onClickFunction}>{children}</button>
    </ButtonContainer>
  )
}
