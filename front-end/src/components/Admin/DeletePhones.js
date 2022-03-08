import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs'

const DeletePhones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        const source = axios.CancelToken.source();
        getPhones(source);
        return () => {
          source.cancel();
        };
    }, []);
    const getPhones = (source) => {
        axios.get('/phones?all=true', { cancelToken: source.token, }).then(({ data }) => {
            setPhones(data);
        })
        .catch((err) => {
        console.log(err);
        });
    }
    const deletePhone = (e) => {
        e.preventDefault();
        const source = axios.CancelToken.source();
        console.log(e.target.id)
        axios.delete(`/phone/${e.target.id}`, { id: e.target.id }).then((data) => {
            getPhones(source);
        });
        
    }
    return (
        <Container>
          <Title>Phones list</Title>
          {
              phones.map((data, index) => <Phone key={index}>{data.name} - {data.price}£ <Icon><BsTrash id={data._id} onClick={deletePhone} /></Icon></Phone> )
          }
        </Container>
      )
    }
    
const Container = styled.div`
    grid-area: deletePhones;
    background-color: #eeefff;
    display: flex;
    transition: all .2s linear;
    flex-direction: column;
`;

const Title = styled.h2`
    margin-left: .8em;
    margin-top: 1em;
`;

const Phone = styled.span`
    margin: 2em;
    font-size: 1.4em;
    display: inline;
`;

const Icon = styled.span`
    cursor: pointer;
    vertical-align: middle;
`;

export default DeletePhones