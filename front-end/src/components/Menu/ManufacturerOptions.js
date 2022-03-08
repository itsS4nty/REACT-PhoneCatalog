import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateManufacturers } from '../../reducers/filtersReducer';
import spinner from '../../assets/gifs/spinner.gif';

const ManufacturerOptions = () => {
  const [activeManufacturers, setActiveManufacturers] = useState({});
  const dispatch = useDispatch();
  const handleOnClick = (e) => {
    e.preventDefault();
    setActiveManufacturers({
      ...activeManufacturers,
      [e.target.id]: !activeManufacturers[e.target.id],
    })
    dispatch(updateManufacturers(e.target.value));
  }
  const [manufacturers, setManufacturers] = useState([]);
  useEffect(() => {
      const source = axios.CancelToken.source();
      axios.get('/manufacturers', { cancelToken: source.token, }).then(({ data }) => {
        setManufacturers(data);
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        source.cancel();
      };
  }, [])
  
  return (
    <>
      <hr />
      <Title>Manufacturer</Title>
        {
        manufacturers.length ? <Container>
          { manufacturers.map((data, index) => <Button key={index} id={data._id} type='button' value={data.name} onClick={handleOnClick} active={activeManufacturers[data._id]} />) }
        </Container>
        :
        <img src={spinner} alt='Spinner' width='250' height='150' />
        
        }
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
  cursor: pointer;
  background-color: ${props => props.active ? '#cbcef8' : 'transparent'};
  border: 1px solid ${props => props.active ? 'white' : 'black'};
  border-radius: 5px;
  margin-bottom: 1em;
  width: 10em;
  height: 2.5em;
  transition: all .1s ease-in-out;
  font-weight: bold;
  font-size: .9em;
  color: ${props => props.active ? 'white' : 'black'};
  @media (max-width: 768px) {
    margin-right: 1em;
  }
  &:hover {
    background-color: #cbcef8;
    border-color: white;
    color: white;
  }
`;

const Title = styled.p`
  font-weight: bold;
`;

export default ManufacturerOptions;