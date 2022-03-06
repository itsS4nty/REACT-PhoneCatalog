import React from 'react'
import styled from 'styled-components';

const ManufacturerOptions = () => {
  return (
    <>
      <hr />
      <Title>Manufacturer</Title>
      <Container>
        <Button type='button' value='Apple' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
        <Button type='button' value='Samsung' />
      </Container>
      <hr />
    </>

  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
`;

const Button = styled.input`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 1em;
  width: 10em;
  height: 2.5em;
  @media (max-width: 768px) {
    margin-right: 1em;
  }
`;

const Title = styled.p`
  font-weight: bold;
`;

export default ManufacturerOptions;