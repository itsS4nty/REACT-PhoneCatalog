import React from 'react'
import styled from 'styled-components';
import NavBarItems from '../Menu/NavBarItems';

const Menu = ({ handleOnClick, activeManufacturers }) => {
    return (
        <Container>
            <NavBarItems handleOnClick={handleOnClick} activeManufacturers={activeManufacturers} />
        </Container>
      )
    }
    
const Container = styled.div`
    grid-area: nav;
    background-color: #eeefff;
`;

export default Menu;