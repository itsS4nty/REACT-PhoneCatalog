import Main from "./views/Main";
import './assets/css/reset.css';
import styled from "styled-components";

function App() {
  return (
    // <MainContainer>
      <Main />
    // </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
`;

export default App;
