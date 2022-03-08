import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateMaxPriceRange, updateMinPriceRange } from '../../reducers/filtersReducer';
import ManufacturerOptions from './ManufacturerOptions';
import PriceRange from './PriceRange';
import StorageOptions from './StorageOptions';

const NavBarItems = ({ handleOnClick, activeManufacturers }) => {
  const dispatch = useDispatch();
  const x = ({ min, max }) => {
    dispatch(updateMinPriceRange(min));
    dispatch(updateMaxPriceRange(max));
  }
  return (
    <Container>
      <ManufacturerOptions handleOnClick={handleOnClick} activeManufacturers={activeManufacturers} />
      <PriceRange
      min={0}
      max={1000}
      onChange={x}
      />
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