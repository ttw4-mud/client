import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GamePage = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  background-image: url("https://fontmeme.com/permalink/200429/9b8a17fc977f349cf959004d27ad1b9f.png");
  background-repeat: no-repeat;
  // border: 5px black solid;
  // width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: block;
  margin-left: auto;
  margin-right: auto;
  width: 82%;
`;

export const StartButton = styled.button`
  background-color: red;
  border-radius: 5px;
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveButton = styled.button`
  background-color: red;
  border-radius: 5px;
  width: 6rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.button`
  border-radius: 5px;
  width: 60%;
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content:center;
  align-items: center;
  background-color: black;
`;
