import React from 'react';
import { StyledBurger } from './Burger.styled';

export interface BurgerProps {
  open: boolean;
  setOpen: Function;
  ariaControls: string;
}

const Burger = ({ open, setOpen, ariaControls }: BurgerProps) => {
  const isExpanded = open ? true : false;

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
  )
}

export default Burger;