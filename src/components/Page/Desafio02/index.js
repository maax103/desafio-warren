import React, { useState } from 'react'
import { Button } from '../../../generics/Button';
import { Desafio02Container } from './style'

export const Desafio02 = () => {

  const [maxTolerance, setMaxTolerance] = useState(0);
  const [classTime, setClassTime] = useState(0);
  const [students, setStudents] = useState([{time: 0}]);
  // const [arrivalTime, setArrivalTime] = useState([0]);

  function addStudent() {
    setStudents((studants)=>{
      let newArray = [...studants];
      newArray.push({time: 0});
      return newArray;
    })
  }

  function handleStudantArrivalTime(studentId, time){
    setStudents((students)=>{
      let newArray = [...students];
      newArray[studentId].time = time;
      console.log(newArray);
      return newArray;
    })
  }

  return (
    <Desafio02Container>
      <p>
        Desafio: Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de
        alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).
      </p>
      <p>
        Instruções: Digite um número abaixo caso deseje alterar o limitador n e clique em Calcular solução.
      </p>
      <label>Horário da aula</label>
      <input type="time"
        onChange={(e) => {
          console.log(e.target.value)
          setClassTime(e.target.value)
        }
        }
      />
      <label>Quantidade de alunos para aula</label>
      <input type="number"
        onChange={(e) => {
          let value = e.target.value >= 0 ? e.target.value : 0;
          console.log(value);
          setMaxTolerance(value)
        }}
      />
      {students.map((studant, id) => (
      <div key={id} className='student'>
        <label className='studantLabel'>Horário de chegada do aluno {id + 1}</label>
        <input type="time"
          onChange={(e) => {
            handleStudantArrivalTime(id, e.target.value);
          }
          }
        />
      </div>
      ))}
      <button onClick={addStudent}>Adicionar mais um aluno</button>
    </Desafio02Container>
  )
}