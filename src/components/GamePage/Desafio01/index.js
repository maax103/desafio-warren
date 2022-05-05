import React, { useState } from 'react'
import { Desafio01Container } from './style'

const Solution = ({flipNumberAndSum , capValue}) => {
  return(
    capValue
  )
}

export const Desafio01 = ({ }) => {
  
    const [capValue, setCapValue] = useState(1000000)
    // const [capV]
    const [solution, setSolution] = useState([]);

    function flipNumberAndSum(n){
      let number = String(Number(n)); // Remove left zeros and convert to string
      
      let numberArray = number.split("");
      // console.log(numberArray);
      let flippedArray = numberArray.reverse();
      let flippedNumber = flippedArray.join("");

      return {number: number, flip: flippedNumber, sum: Number(number) + Number(flippedNumber)};
      
    }

    function calculateSolution(){
      let number = capValue;
      if(number === ""){number = 1000000}

      // for(let i = 0; i < number)
    }

    return (
    <Desafio01Container> 
      <p>
        Desafio: Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.
      </p>
      {/* <label>Cap Value</label> */}
      <input type="text" 
        onChange={(e)=>{
          setCapValue(e.target.value)
        }} placeholder={1000000}
      />
      <button onClick={calculateSolution}>Calculate</button>
      <div className='solution'>
        <Solution capValue={capValue} flipNumberAndSum={flipNumberAndSum} />
      </div>
    </Desafio01Container>
  )
}