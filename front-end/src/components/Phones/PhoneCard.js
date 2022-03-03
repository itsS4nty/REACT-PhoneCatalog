import React from 'react'
import styled from 'styled-components';
import PhoneImage from './PhoneImage';
import PhoneName from './PhoneName';
import PhonePrice from './PhonePrice';

const PhoneCard = ({ data }) => {
  return (
    <Container>
      <PhoneImage img={data.image} name={data.name} />
      <PhoneName name={data.name} />
      <PhonePrice price={data.price} />
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  height: 40vh;
  border-radius: 15px;
`;

export default PhoneCard;