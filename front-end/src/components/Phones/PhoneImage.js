import React from 'react'
import styled from 'styled-components';

const PhoneImage = ({ img, name }) => {

    return (
        <Container>
            <Img src={img} alt={name} />
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    margin: 2em 0 .3em 0;
`;

const Img = styled.img`
    width: 10vw;
    height: 20vh;
`;


export default PhoneImage;