import React from 'react'
import styled from 'styled-components';

const PhoneName = ({ name, ram, color }) => {
    return (
      <Container>
          <Name>{name} {ram}GB {color}</Name>
      </Container>
    )
}

const Container = styled.div`
    text-align: center;
`;

const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export default PhoneName;