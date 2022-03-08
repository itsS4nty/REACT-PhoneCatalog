import React from 'react'
import styled from 'styled-components';

const PhonePrice = ({ price }) => {
    return (
        <Container>
            <Price>{price}£</Price>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 2vh;
    text-align: center;
`;

const Price = styled.i`
    font-size: 1.8rem;
    font-weight: bold;
`;

export default PhonePrice;