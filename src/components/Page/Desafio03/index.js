import React, { useState } from "react";
import { Desafio03Container } from "./style";

export const Desafio03 = () => {
  const [number, setNumber] = useState(10);
  const [numberArray, setNumberArray] = useState([]);
  const [insertNumber, setInsertNumber] = useState(1);
  const [solutionArray, setSolutionArray] = useState([]);
  const [displayDownload, setDisplayDownload] = useState(false);

  var list = [];

  const filterDistinct = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }
  function handleSetNumber(e) {
    if (insertNumber <= 0) {
      return;
    }
    if (e.key === "Enter") {
      setNumberArray((numberArray) => {
        let newArray = [...numberArray];
        newArray.push(Number(insertNumber));
        newArray = newArray.filter(filterDistinct);
        newArray.sort((a, b) => a - b);
        return newArray;
      });
      setInsertNumber("");
    }
  }

  function recursiveCall(
    slot,
    numberPossibilities,
    array,
    objective,
    solution,
    timeOut
  ) {
    if (slot < 1) {
      return;
    }
    let timeDiff = new Date() - timeOut;
    if (timeDiff > (5 * 1000)) {
      return
    }

    let slotValue;
    for (let n = 0; n < numberPossibilities; n++) {
      slotValue = array[n];
      solution.push(slotValue);

      recursiveCall(slot - 1, numberPossibilities, array, objective, solution, timeOut);

      let total = 0;
      solution.forEach((elem) => (total = total + elem));
      if (total === objective) {
        list.push([...solution]);
      }
      solution.pop();
    }
  }

  function calculateSolution(array, numberValue) {
    let newArray =
      array === undefined ? [...numberArray].reverse() : [...array].reverse();
    let amount = numberValue === undefined ? Number(number) : Number(numberValue);

    if ((newArray.length === 1 && newArray[0] === 1) || newArray.length === 0) {
      return;
    }
    let minNumber = newArray.reduce(function (a, b) { return Math.min(a, b) });
    if (Math.floor(amount / minNumber) === 0) { return }

    let numberPossibilities = newArray.length;
    let solution = [];

    let maxNumber = newArray.reduce(function (a, b) { return Math.max(a, b); });
    let slotGuess = Math.floor(amount / maxNumber);

    let slot = slotGuess;
    let minPossibilities = numberPossibilities ** slotGuess;
    if (minPossibilities > 10 ** 7) {
      calculateEasySolution();
      return;
    }
    let timeOut = new Date()
    while (slot <= slot + 5) {
      recursiveCall(slot, numberPossibilities, newArray, amount, solution, timeOut);
      slot += 1;
      if (list.length > 0) {
        break
      }
      if ((new Date() - timeOut) > (5 * 1000)) {
        calculateEasySolution()
        return
      }
    }
    list.forEach((elem) => {
      elem.sort();
      if (elem.length > 30) { setDisplayDownload(true) } else { setDisplayDownload(false) }
    });
    list = uniq(list);
    setSolutionArray(list);
  }

  function calculateEasySolution() {
    let newArray = [...numberArray].reverse();
    let amount = Number(number);
    let solution = [];
    newArray.forEach((elem) => {
      if (elem === 0) {
        return;
      }
      let quotient = Math.floor(amount / elem);
      let remainder = amount % elem;

      if (quotient > 0) {
        amount = remainder;
        for (let i = 1; i <= quotient; i++) {
          solution.push(elem);
        }
      }
    });
    if (amount === 0) {
      setSolutionArray([
        "Problema complexo. Utilizado algoritmo otimizado de solu????o ??nica",
        solution,
      ]);
    } else {
      solution.push(`Problema sem solu????o - restou ${amount}`);
      setSolutionArray([solution]);
    }
    if (solution.length > 30) { setDisplayDownload(true) } else { setDisplayDownload(false) }
    return
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
    <Desafio03Container>
      <p>
        Desafio: dado um vetor de n??meros e um n??mero n. Determine a soma com o
        menor n??mero de elementos entre os n??meros do vetor mais pr??xima de n e
        tamb??m mostre os elementos que comp??em a soma. Para criar a soma,
        utilize qualquer elemento do vetor uma ou mais vezes.
      </p>
      <p>
        Instru????es: escolha um n??mero e informe uma lista de n??mero para gerar a
        menor combina????o.
      </p>
      <div className="solution">
        <p>Lista atual:</p>
        <p>{numberArray.toString()}</p>
      </div>
      <div className="menu">
        <div className="inputs">
          <label>N??mero desejado</label>
          <input
            value={number}
            type="number"
            min="1"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <label>Insira um n??mero na lista</label>
          <input
            value={insertNumber}
            type="number"
            min="1"
            onChange={(e) => {
              setInsertNumber(e.target.value);
            }}
            onKeyDown={handleSetNumber}
          />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              calculateSolution();
            }}>
            Calcular solu????o
          </button>
          <button
            onClick={() => {
              setNumberArray([]);
              setSolutionArray([]);
              setDisplayDownload(false);
            }}>
            Limpar lista
          </button>
        </div>
      </div>
      {numberArray.length > 0 && number ?
        <div className="solution">
          {solutionArray.length === 0 ?
            <p>Clique em calcular</p>
            :
            <>
              <p>Total de solu????es: {solutionArray.length}</p>
              <p>Solu????o:</p>
              {solutionArray.map((elem, index) => (
                <p key={index}>
                  {JSON.stringify(elem)}
                </p>
              ))}
            </>
          }
          {displayDownload ?
            <button className="downloadButton" onClick={() => { downloadFile("arquivo.txt", JSON.stringify(solutionArray)) }}>
              Clique aqui para baixar a lista completa
            </button>
            : ""
          }
        </div>
        : ""
      }
    </Desafio03Container>
  );
};
