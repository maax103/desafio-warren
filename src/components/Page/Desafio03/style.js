import styled from "styled-components";

export const Desafio03Container = styled.div`
  /* background-color: white; */
  border-radius: 5px;
  min-width: 400px;
  min-height: 400px;
  padding: 30px 50px;
  /* border: 1px solid #8257E6; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  line-height: 100%;
  flex-direction: column;

  p {
    line-height: 2rem;
  }

  

  input {
    background-color: #00000000;
    border: 1px solid #8257e6;
    padding: 1rem;
    color: #e1e1e6;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    text-align: center;
    min-width: 400px;
    margin: 0.5rem auto 2rem auto;

  }
  /* input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input[type=number] {
  -moz-appearance: textfield;
  } */

  label {
    min-width: 400px;
    margin: 0.5rem auto;
  }

  .solution {
    border: 1px solid #8257e6;
    width: 80vw;
    border-radius: 3px;
    margin: 50px auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      margin: 2rem auto;
      max-width: 80vw;
      overflow: hidden;
    }
  }
  
`;
