import React from 'react'
import styled from 'styled-components';

const PhoneImage = ({ img, name }) => {

    return (
        <Container>
            <Img src={`http://localhost:3030/images/${img}`} alt={name} />
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    margin: 2em 0 .3em 0;
`;

const Img = styled.img`
    width: 9em;
    height: 10.5em;
`;


export default PhoneImage;