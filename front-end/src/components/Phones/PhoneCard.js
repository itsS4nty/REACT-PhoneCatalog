import React, { useState } from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import PhoneInfoContainer from '../PhoneInfo.js/PhoneInfoContainer';
import MoreInfo from './MoreInfo';
import PhoneImage from './PhoneImage';
import PhoneName from './PhoneName';
import PhonePrice from './PhonePrice';

const PhoneCard = ({ data, phoneInfo }) => {
  return (
    <>
      <Container>
        <div>
          <PhoneImage img={data.imageFileName} name={data.name} />
          <PhoneName name={data.name} ram={data.ram} color={data.color} />
          <PhonePrice price={data.price} />
        </div>
        <MoreInfo id={data._id} onClick={phoneInfo} />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #fff;
  height: 40vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default PhoneCard;