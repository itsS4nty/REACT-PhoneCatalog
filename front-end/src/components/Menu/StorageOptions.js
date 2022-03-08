import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateStorage } from '../../reducers/filtersReducer';

const StorageOptions = () => {
  const [activeStorageOptions, setActiveStorageOptions] = useState({});
  const dispatch = useDispatch();
  const handleOnClick = (e, storage) => {
    e.preventDefault();
    setActiveStorageOptions(e.target.id);
    dispatch(updateStorage(storage));
  }
  return (
    <>
      <Title>Storage</Title>
      <Container>
        <Button id='1' type='button' value='+8GB' onClick={(e) => handleOnClick(e, 8)} active={activeStorageOptions === '1'} />
        <Button id='2' type='button' value='+16GB' onClick={(e) => handleOnClick(e, 16)} active={activeStorageOptions === '2'} />
        <Button id='3' type='button' value='+32GB' onClick={(e) => handleOnClick(e, 32)} active={activeStorageOptions === '3'} />
        <Button id='4' type='button' value='+64GB' onClick={(e) => handleOnClick(e, 64)} active={activeStorageOptions === '4'} />
        <Button id='5' type='button' value='+128GB' onClick={(e) => handleOnClick(e, 128)} active={activeStorageOptions === '5'} />
        <Button id='6' type='button' value='+256GB' onClick={(e) => handleOnClick(e, 256)} active={activeStorageOptions === '6'} />
      </Container>
      <hr />
    </>

  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;
    overflow-y: scroll;
  }
`;

const Button = styled.input`
  flex: 0 0 34%;
  cursor: pointer;
  background-color: ${props => props.active ? '#cbcef8' : 'transparent'};
  border: 1px solid ${props => props.active ? 'white' : 'black'};
  border-radius: 5px;
  margin-bottom: 1em;
  height: 2.5em;
  transition: all .1s ease-in-out;
  font-weight: bold;
  color: ${props => props.active ? 'white' : 'black'};
  &:hover {
    background-color: #cbcef8;
    border-color: white;
    color: white;
  }
  :nth-child(odd) {
    margin-right: 1em;
  }
`;

const Title = styled.p`
  font-weight: bold;
`;

export default StorageOptions;