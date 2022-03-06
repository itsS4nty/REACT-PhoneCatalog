import React from 'react'
import styled from 'styled-components';
import ManufacturerOptions from './ManufacturerOptions';
import PhoneColor from './PhoneColor';
import PhoneRam from './PhoneRam';
import PriceRange from './PriceRange';
import StorageOptions from './StorageOptions';

const NavBarItems = () => {
  return (
    <Container>
      <ManufacturerOptions />
      <PriceRange
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <PhoneColor />
      <PhoneRam />
      <StorageOptions />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-width: 15vw;
  flex-direction: column;
  margin: 1em;
  gap: 20px;
  @media (max-width: 768px) {
    margin-top: 5em;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default NavBarItems;