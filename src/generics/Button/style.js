import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 300px;
  background-color: #121214;
  height: 100px;
  /* border: 1px solid #8257E6; */
  border-right: none;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: #ff4444;
  }

  button {
    background-color: #ffffff00;
    border: none;
    /* height: 100%; */
    font-size: 2rem;
    line-height: 110%;
    color: #919191;
    transition: color, 0.3s, border-bottom, 0.3s;
    padding: 0.6rem;
    border-bottom: 2px solid #00000000;
    &:hover {
      color: #ffffff;
      font-size: 2.2rem;
      /* font-weight: bold; */
      border-bottom: 2px solid #8257e6;
    }
  }
  .active {
    color: #ffffff;
    font-size: 2.2rem;
    /* font-weight: bold; */
    border-bottom: 2px solid #8257e6;
  }
`;
