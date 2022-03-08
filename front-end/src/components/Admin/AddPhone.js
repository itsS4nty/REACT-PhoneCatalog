import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { change_variable } from '../../reducers/newManufacturerReducer';

const AddPhone = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [newPhoneData, setNewPhoneData] = useState({});
  const [image, setImage] = useState({file: ''});
  const variable = useSelector(change_variable);
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
  }, [variable])
  const handleOnChange = (e) => {
    if(e.target.name === 'image') {
      setImage({file: e.target.files[0]});
      return;
    }
    setNewPhoneData({
      ...newPhoneData,
      [e.target.name]: e.target.value,
    });
  }
  const createPhone = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('phoneImage', image.file, `image_${newPhoneData.name}.jpg`);
    formData.append('data', JSON.stringify(newPhoneData));
    axios.post('/create-phone', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((data) => {
      console.log(data)
    })
  }
  return (
    <Container>
      <Title>Add phone</Title>
      <Form>
        <InputText type='text' name='name' placeholder='Phone name' onChange={handleOnChange}  />
        <Select name='manufacturer' onChange={handleOnChange}>
          {
            manufacturers.map((data, index) => <option key={index} value={data.name}>{data.name}</option> )  
          }
        </Select>
        <InputText type='text' name='description' placeholder='Description' onChange={handleOnChange}  />
        <InputText type='text' name='color' placeholder='Color' onChange={handleOnChange}  />
        <InputText type='number' name='price' placeholder='Price' onChange={handleOnChange}  />
        <InputFile type='file' name='image' placeholder='Image' onChange={handleOnChange}  />
        <InputText type='text' name='screen' placeholder='Screen' onChange={handleOnChange}  />
        <InputText type='text' name='processor' placeholder='Processor' onChange={handleOnChange}  />
        <InputText type='number' name='ram' placeholder='RAM' onChange={handleOnChange}  />
        <InputText type='number' name='storage' placeholder='Storage' onChange={handleOnChange}  />
        <InputSubmit type='submit' onClick={createPhone}>Create</InputSubmit>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  grid-area: addPhone;
  background-color: #eeefff;
`;

const Title = styled.h2`
  margin-left: .8em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputText = styled.input`
  margin: .8em 0;
  margin-left: 1.9em;
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
  width: 25em;
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

const Select = styled.select`
  margin: .8em 0;
  margin-left: 1.9em;
  width: 25em;
  height: 3em;
  border: 1px solid black;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const InputFile = styled.input`
  margin: .8em 0;
  margin-left: 1.9em;
  width: 25em;
  height: 3em;
  transition: all .1s ease-in-out;
  font-weight: bold;
  color: black;
  ::-webkit-file-upload-button {
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    padding: 10px 25px;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: 5px;
    transition: all .1s ease-in-out;
    color: black;
    &:hover {
      background-color: #cbcef8;
      border-color: white;
      color: white;
    };
  }
`;

export default AddPhone;