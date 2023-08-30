import React from 'react';
import Header from '../layouts/header/Header';
import { Outlet } from 'react-router-dom';

const WithHeader = ({ index, t }) => {
  return (
    <>
      <Header index={index} t={t} />
      <Outlet />
    </>
  );
};

export default WithHeader;