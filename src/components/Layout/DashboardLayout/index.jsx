import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../NavBars/DashboardNavbar';
import { Container, Content, Root } from '../style';
import { Wrapper } from './style';
import Sidebar from '../../Sidebar';

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <Root>
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <Wrapper>
        <Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <Container>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Wrapper>
    </Root>
  );
};

export default DashboardLayout;
