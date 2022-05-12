import React from 'react';
import { Container, Content } from './style';

const UserCell = ({ title = '', role = '', image = '' }) => (
  <Container>
    <Content>
      <img width="45px" height="45px" src={image} alt="tableimage" />
      {title.length > 0 ? (
        <>
          <span>{title}</span>
          <span>{role}</span>
        </>
      ) : null}
    </Content>
  </Container>
);

export default UserCell;
