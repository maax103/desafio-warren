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

  .menu{
    width: 80vw;
    padding: 1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }

  .buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    button{
      border: 1px solid #8257e6;
      padding: 1rem;
      width: 200px;
      border-radius: 0.2rem;
      font-size: 1rem;
      font-weight: bold;
      background-color: #00000000;
      color: white;
      transition: color 0.1s, background-color 0.1s;
      &:first-child{
        color: #e1e1e6;
        background-color: #8257e6;
        &:hover {
        background-color: #8257e6EE
        }
      }
      &:last-child{
        margin-left: 2rem;
        border-color: #770000;
        color: #809181;
        &:hover{
            background-color: #880000;
            color: white;
        }
      }
    }
  }

  .downloadButton{
        margin: 2rem auto;
        max-width: 1000px;
        color: #E1E1E6;
        font-size: 2rem;
        border: none;
        background-color: #00000000;
        line-height: 2.2rem;

        &:hover{
            filter: brightness(2);
            font-size: 2.2rem;
        }
    }

  label {
    /* min-width: 400px; */
    width: 100%;
    display:flex;
    justify-content: center;
    /* text-align: center; */
  }

  .solution {
    border: 1px solid #8257e6;
    min-height: 200px;
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
