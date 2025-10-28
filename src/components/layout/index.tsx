import React from 'react';
import Container from '../container';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';

const Layout = () => {
  return (
    <>
    <Navigation/>
    <Container>
      <Outlet/>
    </Container>
    </>
  );
};

export default Layout;