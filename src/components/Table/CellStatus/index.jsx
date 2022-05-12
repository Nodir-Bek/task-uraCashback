import React from 'react';
import { Container, Circle, CircleContent, Content } from './style';

export default ({ value }) => {
  return (
    <>
      {value === 1 || 0 ? (
        <Container>
          <Circle active={value}>
            <CircleContent active={value} />
          </Circle>
          <Content active={value}>{value ? 'Active' : 'Inactive'}</Content>
        </Container>
      ) : (
        <Container>
          <Circle active={value}>
            <CircleContent active={value} />
          </Circle>
          <Content active={value}>{value}</Content>{' '}
        </Container>
      )}
    </>
  );
};
