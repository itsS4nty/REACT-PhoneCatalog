import React from 'react'
import styled from 'styled-components';
import MoreInfo from './MoreInfo';
import PhoneImage from './PhoneImage';
import PhoneName from './PhoneName';
import PhonePrice from './PhonePrice';

const PhoneCard = ({ data }) => {
  return (
    <Container>
      <PhoneImage img={data.image} name={data.name} />
      <PhoneName name={data.name} ram={data.ram} color={data.color} />
      <PhonePrice price={data.price} />
      <MoreInfo />
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  height: 40vh;
  border-radius: 15px;
`;

export default PhoneCard;