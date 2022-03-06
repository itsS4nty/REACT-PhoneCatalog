import React from 'react'
import styled from 'styled-components';
import NavBarItems from '../Menu/NavBarItems';

const Menu = () => {
    return (
        <Container>
            <NavBarItems />
        </Container>
      )
    }
    
const Container = styled.div`
    grid-area: nav;
    background-color: #eeefff;
`;

export default Menu;