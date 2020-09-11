import React, { memo } from 'react';
import styled from 'styled-components';
import Form from './Form';

const Header = () => (
  <Container>
    <Title>OMDb Movie List App</Title>
    <Form />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 36px;
  margin: 32px 0;
  text-align:center;
`;

export default memo(Header);
