import Main from "./views/Main";
import './assets/css/reset.css';
import styled from "styled-components";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030/'

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
