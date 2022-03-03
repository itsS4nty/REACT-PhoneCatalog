import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>Phone Catalog</h1>
    </Container>
  )
}

const Container = styled.div`
  min-height: 75px;
  grid-area: header;
  text-align: center;
  background-color: aliceblue;
`;

export default Header;