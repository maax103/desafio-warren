import React, { useState } from 'react'
import { Desafio01Container } from './style'

export const Desafio01 = () => {

  const [capValue, setCapValue] = useState(1000000)
  // const [capV]
  const [solution, setSolution] = useState([]);

  function flipNumberAndSum(n) {
    let number = String(Number(n)); // Remove left zeros and convert to string

    let numberArray = number.split("");
    let flippedArray = numberArray.reverse();
    let flippedNumber = flippedArray.join("");

    return { number: number, flip: flippedNumber, sum: Number(number) + Number(flippedNumber) };

  }

  function calculateSolution() {
    let capNumber = capValue;
    if (capNumber === "") { capNumber = 1000000 }

    let newArray = [];
    for (let n = 0; n < capNumber; n++) {
      let numberObj = flipNumberAndSum(n);
      if (numberObj.sum < capNumber && numberObj.sum % 2 !== 0) {
        newArray.push({ number: n, flip: numberObj.flip, sum: numberObj.sum })
      }
    }

    setSolution(newArray);
    console.log(newArray);
  }

  function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  return (
    <Desafio01Container>
      <p>
        Desafio: Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.
        Digite um número abaixo caso deseje alterar o limitador n.
      </p>
      <p>
        Instruções: Digite um número abaixo caso deseje alterar o limitador n e clique em Calcular solução.
      </p>
      {/* <label>Cap Value</label> */}
      <input type="text"
        onChange={(e) => {
          setCapValue(e.target.value)
        }} placeholder={1000000}
      />
      <button onClick={calculateSolution}>Calcular solução</button>
      <div className='solution'>
        {solution.length === 1 ?
          <p>Existe {solution.length} solução...</p>
          :
          <p>Existem {solution.length} soluções...</p>
        }
        {solution.length > 2590 ? 
        
        <>
          <p>Tabela muito grande...</p>
          <button onClick={()=>{downloadFile("Tabela",JSON.stringify(solution))}}>
            Clique para baixar a tabela em formato JSON
          </button>
        </>:
          solution.length == 0 || solution.length == undefined ? "" :
          
          <table>
            <thead>
              <tr>
                <th>Solução</th>
                <th>N</th>
                <th>N-Invertido</th>
                <th>Soma</th>
              </tr>
            </thead>
            <tbody>

              {solution.map((elem, index) => (
                <tr key={elem.number}>
                  <td>{index + 1}</td>
                  <td>{elem.number}</td>
                  <td>{elem.flip}</td>
                  <td>{elem.sum}</td>
                </tr>
              ))}
            </tbody>
          </table>
          }
      </div>
    </Desafio01Container>
  )
}