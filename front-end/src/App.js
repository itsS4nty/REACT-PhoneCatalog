import Main from "./views/Main";
import './assets/css/reset.css';
import styled from "styled-components";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Admin from "./views/Admin";

axios.defaults.baseURL = 'http://193.70.1.70:5050/';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/admin' element={ <Admin /> } />
          <Route exact path='/' element={ <Main /> } />
          <Route path='*' element={ <Main /> } />
        </Routes>
    </Router>
  );
}


export default App;
