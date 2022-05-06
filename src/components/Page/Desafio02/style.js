import styled from "styled-components";

export const Desafio02Container = styled.div`
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

  button {
    margin: 2rem auto;
    max-width: 1000px;
    border: 1px solid #8257e6;
    border-radius: 0.4rem;
    font-size: 1rem;
    padding: 1rem;
    background-color: #00000000;
    color: #e1e1e6;
    transition: color 0.1s, background-color 0.1s;
    font-weight: bold;

    &:hover {
      filter: brightness(1.1);
      color: white;
      background-color: #8257e6;
    }
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
  label {
    min-width: 400px;
    margin: 0.5rem auto;
  }

  .student {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .buttons {
    margin: 0 auto;
    button {
      &:last-child {
        margin-left: 1rem;
        border-color: #770000;
        color: #809181;
        &:hover{
            background-color: #880000;
            color: white;
        }
      }
    }
  }

  .solution {
    border: 1px solid #8257e6;
    border-radius: 3px;
    margin: 50px 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
      margin: 2rem auto;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    /* tr:nth-child(even){background-color: #f2f2f2;}
        tr:hover {background-color: #ddd;} */

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      /* background-color: #04AA6D; */
      color: white;
    }
    tr {
      line-height: 2.4rem;
    }
  }
  h3{
    margin: auto;
    margin-top: 2rem;
  }
  .normal{
    color: green;
  }
  .canceled{
    color: #FF2222;
  }
`;
