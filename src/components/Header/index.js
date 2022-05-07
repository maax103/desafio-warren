import React from 'react'
import { Button } from '../../generics/Button'
import { HeaderContainer } from './style'

export const Header = ({desafio ,handleChange}) => {
  return (
    <>
        <HeaderContainer>
            <Button id={1} desafio={desafio} onClickFunction={()=>{handleChange(1)}}>Desafio 01</Button>
            <Button id={2} desafio={desafio} onClickFunction={()=>{handleChange(2)}}>Desafio 02</Button>
            <Button id={3} desafio={desafio} onClickFunction={()=>{handleChange(3)}}>Desafio 03</Button>
        </HeaderContainer>
    </>
  )
}
