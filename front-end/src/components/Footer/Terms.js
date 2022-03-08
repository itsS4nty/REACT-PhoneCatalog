import React from 'react'
import styled from 'styled-components';

const Terms = () => {
  return (
    <Container>
        <Title>Info</Title>
        <Ul>
            <Li>About us</Li>
            <Li>Terms of Service</Li>
            <Li>Privacy</Li>
        </Ul>
    </Container>
  )
}

const Container = styled.div`
    margin: 1em;
    flex-direction: column;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 1.3em;
    color: black;
    align-self: flex-start;
`;

const Ul = styled.ul`
    list-style: none;
`;

const Li = styled.li`
    cursor: pointer;
    color: #787878;
    &:hover {
        text-decoration: underline;
    }
`;

export default Terms;