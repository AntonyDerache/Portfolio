import React from 'react';
import { StyledMenu } from './Menu.styled';
import Languages from '../Languages';

const Menu = ({ open, buildTabNavigation, t, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <ul className="text-center d-flex flex-column">
        {buildTabNavigation()}
        <Languages t={t} />
      </ul>
    </StyledMenu>
  )
}

export default Menu;