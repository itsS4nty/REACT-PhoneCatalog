import React from 'react'
import styled from 'styled-components';
import PhoneCard from '../Phones/PhoneCard';

const Catalog = () => {
    const data = {
        name: 'iPhone 11',
        ram: '4',
        color: 'Red',
        price: 599,
        image: 'https://cdn.palbincdn.com/users/40360/images/iphone11-red-select-2019_GEO_EMEA-1610302194.png'
    }
    return (
        <Container>
            <PhonesContainer>
                <PhoneCard data={data} />
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