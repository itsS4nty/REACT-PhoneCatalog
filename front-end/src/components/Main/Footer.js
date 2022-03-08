import React from 'react'
import styled from 'styled-components';
import Copyright from '../Footer/Copyright';
import Terms from '../Footer/Terms';

const Footer = () => {
  return (
    <Container>
      <Terms />
      <Copyright />
    </Container>
  )
}

const Container = styled.div`
  grid-area: footer;
  text-align: center;
  background-color: #cbcef8;
  display: flex;
  justify-content: space-around;
`;

export default Footer;