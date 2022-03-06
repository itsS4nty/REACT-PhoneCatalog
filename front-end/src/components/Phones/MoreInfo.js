import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import styled from 'styled-components';

const MoreInfo = () => {
  return (
    <Container>
      <AiFillPlusCircle /><span>Show me more</span>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 1.25em;
  color: gray;
  align-items: center;
  justify-content: center;
  transition: all .2s linear;
  span {
    margin-left: .5em;
  }
  &:hover {
    color: black;
  }
`;

export default MoreInfo;