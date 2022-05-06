import React, { useEffect, useState } from "react";
import { Desafio02Container } from "./style";

export const Desafio02 = () => {
  const [maxTolerance, setMaxTolerance] = useState(0);
  const [classTime, setClassTime] = useState("18:30");
  const [students, setStudents] = useState([{ time: '18:20' }]);


  function addStudent() {
    setStudents((studants) => {
      let newArray = [...studants];
      newArray.push({ time: '18:20' });
      return newArray;
    });
  }

  function handleStudantArrivalTime(studentId, time) {
    setStudents((students) => {
      let newArray = [...students];
      newArray[studentId].time = time;
      console.log(newArray);
      return newArray;
    });
  }

  function dropStudent() {
    setStudents((students) => {
      let newArray = [...students];
      newArray.pop();
      return newArray;
    });
  }

  function Solution() {
    let laterCount = 0;
    let counterZeros = 0;
    students.forEach((elem) => {
      if (elem.time > classTime) {laterCount = laterCount + 1}
      if (elem.time == 0){counterZeros = counterZeros + 1}
    });
    return students.length - laterCount - counterZeros >= maxTolerance ? (
      <h3>Aula normal com {students.length - laterCount} aluno(s) </h3>
    ) : (
      <h3>Aula canelada pois só há {students.length - laterCount - counterZeros} aluno(s) presente(s)</h3>
    );
  }

  return (
    <Desafio02Container>
      <p>
        Desafio: Construa um algoritmo que dado o tempo de chegada de cada aluno
        e o limite x de alunos presentes, determina se a classe vai ser
        cancelada ou não ("Aula cancelada” ou “Aula normal”).
      </p>
      <p>
        Instruções: Digite um número abaixo caso deseje alterar o limitador n e
        clique em Calcular solução.
      </p>
      <label>Horário da aula</label>
      <input value={classTime}
        type="time"
        onChange={(e) => {
          console.log(e.target.value);
          setClassTime(e.target.value);
        }}
      />
      <label>Quantidade mínima de alunos</label>
      <input id="classTime"
        type="number"
        onChange={(e) => {
          let value = e.target.value >= 0 ? e.target.value : 0;
          console.log(value);
          setMaxTolerance(value);
        }}
      />
      {students.map((studant, id) => (
        <div key={id} className="student">
          <label className="studantLabel">
            Horário de chegada do aluno {id + 1}
          </label>
          <div className="input">
            <input value={students[id].time}
              type="time"
              onChange={(e) => {
                handleStudantArrivalTime(id, e.target.value);
              }}
            />
          </div>
        </div>
      ))}
      <div className="buttons">
        <button onClick={addStudent}>Adicionar outro um aluno</button>
        <button onClick={dropStudent}>Excluir último aluno</button>
      </div>
      <Solution />
    </Desafio02Container>
  );
};
