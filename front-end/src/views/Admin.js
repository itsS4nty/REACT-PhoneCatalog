import React from 'react'
import { Slide, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import AddManufacturer from '../components/Admin/AddManufacturer';
import AddPhone from '../components/Admin/AddPhone';
import DeletePhones from '../components/Admin/DeletePhones';

const Admin = () => {
  return (
    <Container>
      <AddManufacturer />
      <AddPhone />
      <DeletePhones />
      <ToastContainer
        position='bottom-center'
        hideProgressBar={false}
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        transition={Slide}
      />
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
    'addManufacturer addManufacturer'
    'addPhone addPhone'
    'deletePhones deletePhones';
    background-color: #fff;
    color: #444;
    @media (max-width: 768px) {
        grid-template-areas: 
          'addManufacturer addManufacturer'
          'addPhone addPhone'
          'deletePhones deletePhones'
        ;
    }
    overflow: ${props => props.darkContainer ? 'hidden' : 'auto'};
`;

export default Admin;