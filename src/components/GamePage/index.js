import React from 'react'
import { Desafio01 } from './Desafio01';
import { PageContainer } from './style';

export const GamePage = ({desafio}) => {

  

  return (
      <PageContainer>
        {
        desafio === 1 ?
        <Desafio01 />
        :
        desafio === 2 ?
        "Desafio 02"
        :
        desafio === 3 ?
        "Desafio 03"
        :
        "Selecione um desafio"
        }
      </PageContainer>
  )
}
