import React from 'react'
import { ButtonContainer } from './style'

export const Button = ({id, desafio, onClickFunction, children}) => {
  return (
    <ButtonContainer> 
        <button className={desafio === id ? "active" : ""} onClick={onClickFunction}>{children}</button>
    </ButtonContainer>
  )
}
