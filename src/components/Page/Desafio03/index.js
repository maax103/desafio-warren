import React, { useState } from "react";
import { Desafio03Container } from "./style";

export const Desafio03 = () => {
  const [number, setNumber] = useState(100);
  const [numberArray, setNumberArray] = useState([]);
  const [insertNumber, setInsertNumber] = useState(1);
  const [solutionArray, setSolutionArray] = useState([]);


  const filterDistinct = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  function handleSetNumber(e) {
    // console.log(e);
    if (insertNumber <= 0) { return }
    if (e.key === "Enter") {
      setNumberArray((numberArray) => {
        let newArray = [...numberArray];
        newArray.push(Number(insertNumber));
        newArray = newArray.filter(filterDistinct);
        newArray.sort((a, b) => a - b)
        calculateSolution(newArray)
        return newArray
      })
    }
  }

  function calculateSolution(array, numberValue) {
    let newArray = array === undefined ? [...numberArray].reverse() : [...array].reverse();
    let amount = numberValue === undefined ? number : Number(numberValue);
    let solution = [];

    let slotsCount = 1;
    let numberPossibilities = newArray.length;

    let loopCount = 0;
    while (solution.length === 0) {
      let totalPossibilites = numberPossibilities ** slotsCount;
      console.log(totalPossibilites);
      if (totalPossibilites > 10 ** 7) {
        calculateEasySolution(array, numberValue);
        console.log("Calculado a solução fácil");
        return
      }

      let arrayTest = [];
      for (let slot = 1; slot <= slotsCount; slot++) {
        let totalPossibilitesTest = numberPossibilities**slot;
        for (let slotTest = 0; slotTest < totalPossibilitesTest; slotTest++) {
          for (let n = 0; n < numberPossibilities; n++) {
            arrayTest[slot] = n;
            let total = arrayTest.map((elem) => total + elem);
            if (total == amount) {
              solution = arrayTest
              console.log(solution);
            }
          }
        }

      }

      loopCount = loopCount + 1;
      if (loopCount === 3) { break; }
    }

  }

  function calculateEasySolution(array, numberValue) {
    let newArray = array === undefined ? [...numberArray].reverse() : [...array].reverse();
    let amount = numberValue === undefined ? number : Number(numberValue);
    let solution = [];
    newArray.forEach((elem) => {
      // console.log(elem);
      if (elem == 0) { return }
      let quotient = Math.floor(amount / elem);
      // console.log(elem, quotient);
      let remainder = amount % elem;

      if (quotient > 0) {
        amount = remainder;
        console.log(elem, quotient, amount)
        for (let i = 1; i <= quotient; i++) {
          solution.push(elem)
        }
      }
    })
    if (amount === 0) {
      setSolutionArray(solution)
      return
    } else {
      solution.push(`Problema sem solução - restou ${amount}`);
      setSolutionArray(solution);
    }
  }

  return (
    <Desafio03Container>
      <p>
        Desafio: dado um vetor de números e um número n. Determine a soma com o menor número de elementos
        entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma.
        Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.
      </p>
      <p>
        Instruções: escolha um número e informe uma lista de número para gerar a menor combinação.
      </p>
      <div className="solution">
        <p>Lista atual:</p>
        <p>{numberArray.toString()}</p>
      </div>
      <label>Número desejado</label>
      <input value={number}
        type="number"
        min="1"
        onChange={(e) => {
          setNumber(Number(e.target.value));
          calculateSolution(undefined, e.target.value)
        }}
      />
      <label>Insira um número na lista</label>
      <input
        value={insertNumber}
        type="number"
        min="1"
        onChange={(e) => {
          setInsertNumber(Number(e.target.value))
        }}
        onKeyDown={handleSetNumber}
      />
      <div className="solution">
        <p>Soluções:</p>
        <p>{solutionArray.toString()}</p>
      </div>
    </Desafio03Container>
  );
};
