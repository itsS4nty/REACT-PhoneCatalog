import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>Phone Catalog</Title>
      <ContactUs>Contact us</ContactUs>
    </Container>
  )
}

const Container = styled.div`
  min-height: 75px;
  grid-area: header;
  text-align: center;
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  align-self: center;
  margin-left: 2em;
  @media (max-width: 768px) {
    margin-left: .5em;
  }
`;

const ContactUs = styled.p`
  cursor: pointer;
  align-self: center;
  margin-right: 2em;
  @media (max-width: 768px) {
    margin-right: .5em;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;