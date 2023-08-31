import React from 'react';
import StyledBurger from './Burger.styled';

export interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  ariaControls: string;
}

function Burger({ open, setOpen, ariaControls }: BurgerProps) {
  const isExpanded = !!open;

  return (
    <StyledBurger
      id="burger"
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      aria-controls={ariaControls}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
}

export default Burger;
