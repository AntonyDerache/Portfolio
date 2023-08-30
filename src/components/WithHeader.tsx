import React from 'react';
import type { TFunction } from 'i18next';
import { Outlet } from 'react-router-dom';

import Header from '@/layouts/header/Header';

export interface WithHeaderProps {
  index: number;
  t: TFunction;
}

const WithHeader = ({ index, t }: WithHeaderProps) => {
  return (
    <>
      <Header index={index} t={t} />
      <Outlet />
    </>
  );
};

export default WithHeader;