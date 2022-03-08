import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { GrClose } from 'react-icons/gr'
import axios from 'axios';

const PhoneInfoContainer = ({ id, closePhoneInfo }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
      const source = axios.CancelToken.source();
      axios.get(`/phone/${id}`, { cancelToken: source.token, }).then(({ data }) => {
        console.log(data)
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        source.cancel();
      };
  }, [])
  return (
    <Container>
      <Icon onClick={closePhoneInfo}><GrClose /></Icon>
      <Image src={`http://localhost:3030/images/${data.imageFileName}`} />
      <DataContainer>
        <PhoneName>{data.name} {data.ram}GB {data.color}</PhoneName>
        <PhonePrice>{data.price}£</PhonePrice>
      </DataContainer>
      <PhoneDescription>{data.description}</PhoneDescription>
    </Container>
  )
}

const scaleAnimationIn = keyframes`
  0% {
    width: 0vw;
    animation-timing-function: ease-out;
  }
  100% {
    width: 65vw;
  }
`
const scaleAnimationInMobile = keyframes`
  0% {
    width: 0vw;
    animation-timing-function: ease-out;
  }
  100% {
    width: 100vw;
  }
`

const Container = styled.div`
  z-index: 1000;
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 65vw;
  right: 0;
  animation: ${scaleAnimationIn} .3s;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100vw;
    animation: ${scaleAnimationInMobile} .3s;
    visibility: visible !important;

  }
`;

const Image = styled.img`
  width: 27em;
  height: 30em;
`;

const DataContainer = styled.div`
  margin: 5em;
`;

const PhoneName = styled.h3`
  color: black;
  font-size: 2em;
  margin-bottom: .5em;
`;

const PhonePrice = styled.h2`
  color: #cbcef8;
  font-size: 3em;
`;

const PhoneDescription = styled.p`
  text-align: justify;
  flex: 0 0 90%;
  margin: 5em;
`;

const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  margin: 1em;
`;

export default PhoneInfoContainer;