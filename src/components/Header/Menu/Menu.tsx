import React from 'react';
import type { TFunction } from 'i18next';

import StyledMenu from './Menu.styled';
import Languages from '../Languages';

export interface MenuProps {
  open: boolean;
  id: string;
  buildTabNavigation: () => React.JSX.Element[];
  t: TFunction;
}

function Menu({
  open, buildTabNavigation, t, id,
}: MenuProps) {
  const isHidden = !!open;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} id={id}>
      <ul className="text-center d-flex flex-column">
        {buildTabNavigation()}
        <Languages t={t} />
      </ul>
    </StyledMenu>
  );
}

export default Menu;
