import React, { useState } from "react";
import { Desafio02Container } from "./style";

export const Desafio02 = () => {
  const [maxTolerance, setMaxTolerance] = useState(2);
  const [classTime, setClassTime] = useState("18:30");
  const [students, setStudents] = useState([{ time: '18:20' }, { time: '18:29' }]);


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
      if (elem.time > classTime) {laterCount += 1}
      if (elem.time == 0){counterZeros += 1}
    });
    return students.length - laterCount - counterZeros >= maxTolerance ? (
      <h3 className="normal">Aula normal com {students.length - laterCount} aluno(s) </h3>
    ) : (
      <h3 className="canceled">Aula canelada pois há {students.length - laterCount - counterZeros} aluno(s) presente(s)</h3>
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
        Instruções: Defina o horário da aula e quantidade mínima de alunos. Então preencha o horário de chegada dos alunos.
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
      <input 
      value={maxTolerance}
        type="number"
        min="1"
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
        <button onClick={addStudent}>Adicionar outro aluno</button>
        <button onClick={dropStudent}>Excluir último aluno</button>
      </div>
      <Solution />
    </Desafio02Container>
  );
};
