import React from 'react'
import styled from 'styled-components';

const Copyright = () => {
  return (
    <Container>
        <Title>Developed by: <Url>Company SL</Url></Title>
    </Container>
  )
}

const Container = styled.div`
    margin: 1em;
`;

const Title = styled.span`
    font-weight: bold;
    color: #787878;
`;

const Url = styled.span`
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default Copyright;