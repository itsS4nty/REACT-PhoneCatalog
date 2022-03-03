import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      footer
      <p>hola</p>
    </Container>
  )
}

const Container = styled.div`
  grid-area: footer;
  text-align: center;
  background-color: aquamarine;
`;

export default Footer;