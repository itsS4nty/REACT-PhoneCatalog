import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import styled from 'styled-components';

const MoreInfo = ({ onClick, id }) => {
  return (
    <Container>
      <AiFillPlusCircle /><span id={id} onClick={onClick}>Show me more</span>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
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