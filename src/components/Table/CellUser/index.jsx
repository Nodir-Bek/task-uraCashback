import React from 'react';
import { Avatar } from '@mui/material';
import { Container, Content } from './style';

const UserCell = ({ title = '', role = '', image = '' }) => (
  <Container>
    {/* <Avatar sx={{ width: 38, height: 38 }}>{title[0]}</Avatar> */}
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
