import Main from "./views/Main";
import './assets/css/reset.css';
import styled from "styled-components";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Redirect } from 'react-router'
import Admin from "./views/Admin";

axios.defaults.baseURL = 'http://localhost:3030/'

function App() {
  return (
    // <MainContainer>
    <Router>
        <Routes>
          <Route exact path='/admin' element={ <Admin /> } />
          <Route exact path='/' element={ <Main /> } />
          <Route path='*' element={ <Main /> } />
        </Routes>
    </Router>
    // </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
`;

export default App;
