import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { manufacturers, minPrice, maxPrice, storage } from '../../reducers/filtersReducer';
import PhoneCard from '../Phones/PhoneCard';

const Catalog = ({ phoneInfo }) => {
    const [phones, setPhones] = useState([]);
    const manufacturersData = useSelector(manufacturers);
    const minPriceData = useSelector(minPrice);
    const maxPriceData = useSelector(maxPrice);
    const storageData = useSelector(storage);
    useEffect(() => {
        const source = axios.CancelToken.source();
        console.log(manufacturersData.join(','))
        axios.get(`/phones?minPrice=${minPriceData}&maxPrice=${maxPriceData}&manufacturers=${manufacturersData.join(',')}&storage=${storageData}`, { cancelToken: source.token, }).then(({ data }) => {
            setPhones(data)
        })
        .catch((err) => {
            console.log(err);
        });
        return () => {
            source.cancel();
        };
    }, [manufacturersData, maxPriceData, minPriceData, storageData])
    
    return (
        <Container>
            <PhonesContainer>
                {
                    phones.map((data, index) => <PhoneCard key={index} data={data} phoneInfo={phoneInfo} /> )
                }
            </PhonesContainer>
        </Container>
    )
}

const Container = styled.div`
    grid-area: catalog;
    background-color: #eeefff;
`;

const PhonesContainer = styled.div`
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    margin: 1rem;
`;

export default Catalog;