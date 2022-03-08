import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { showToast } from '../../helpers/toast';

const AddManufacturer = () => {
  const [name, setName] = useState({ name: '' });
  const handleOnChange = (e) => {
    // In case we have more inputs, we could use this for all of them
    setName({
      ...name,
      [e.target.name]: e.target.value,
    })
  }
  const createManufacturer = (e) => {
    e.preventDefault();
    if(!name.name.trim()) {
      showToast('warn', 'Input cannot be empty.');
      return;
    }
    axios.post('/create-manufacturer', name).then((data) => {
      if(data.status === 200) {
        showToast('ok', 'Manufacturer created.');
        setName({ name: '' });
      }
    }).catch((err) => {
      showToast('err',err.response.statusText);
    })
  }
  return (
    <Container>
      <Title>Add manufacturer</Title>
      <Form>
        <InputText type='text' name='name' placeholder='Manufacturer name' value={name.name} onChange={handleOnChange} />
        <InputSubmit type='submit' onClick={createManufacturer}>Create</InputSubmit>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  grid-area: addManufacturer;
  background-color: #eeefff;
`;

const Title = styled.h2`
  margin-left: .8em;
  margin-top: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputText = styled.input`
  margin: 2em;
  width: 25em;
  height: 3em;
  border: 1px solid black;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const InputSubmit = styled.button`
  margin: 2em;
  width: 10em;
  height: 3em;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  transition: all .1s ease-in-out;
  font-weight: bold;
  color: black;
  &:hover {
    background-color: #cbcef8;
    border-color: white;
    color: white;
  };
`;

export default AddManufacturer;