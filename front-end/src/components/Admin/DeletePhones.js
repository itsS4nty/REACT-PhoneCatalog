import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs'

const DeletePhones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get('/phones?all=true', { cancelToken: source.token, }).then(({ data }) => {
          setPhones(data);
        })
        .catch((err) => {
          console.log(err);
        });
        return () => {
          source.cancel();
        };
    }, [])
    return (
        <Container>
          <Title>Phones list</Title>
          {
              phones.map((data, index) => 
                <>
                    <Phone>{data.name} - {data.price}£ <Icon><BsTrash /></Icon></Phone>
                </>
              )
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
    vertical-align: middle;
`;

export default DeletePhones