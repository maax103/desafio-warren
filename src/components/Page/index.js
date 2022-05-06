import React from 'react'
import { Desafio01 } from './Desafio01';
import { Desafio02 } from './Desafio02';
import { Desafio03 } from './Desafio03';
import { PageContainer } from './style';

export const Page = ({desafio}) => {

  

  return (
      <PageContainer>
        {
        desafio === 1 ?
        <Desafio01 />
        :
        desafio === 2 ?
        <Desafio02 />
        :
        desafio === 3 ?
        <Desafio03 />
        :
        "Selecione um desafio"
        }
      </PageContainer>
  )
}
