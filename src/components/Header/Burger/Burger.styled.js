import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({ open }) => open ? "black" : "white"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: right;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  }
`;