import React from 'react'
import { Button } from '../../generics/Button'
import { HeaderContainer } from './style'

export const Header = ({handleChange}) => {
  return (
    <>
        <HeaderContainer>
            <Button onClickFunction={()=>{handleChange(1)}}>Desafio 01</Button>
            <Button onClickFunction={()=>{handleChange(2)}}>Desafio 02</Button>
            <Button onClickFunction={()=>{handleChange(3)}}>Desafio 03</Button>
        </HeaderContainer>
    </>
  )
}
