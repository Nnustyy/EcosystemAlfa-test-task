import React from 'react';
import Container from '../container';
import ProductsList from '../../pages/productsList';
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