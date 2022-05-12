import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Content, Root, Wrapper } from '../style';
import MainNavbar from '../../NavBars/MainNavbar';

const MainLayout = () => (
  <Root>
    <MainNavbar />
    <Wrapper>
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Wrapper>
  </Root>
);

export default MainLayout;
