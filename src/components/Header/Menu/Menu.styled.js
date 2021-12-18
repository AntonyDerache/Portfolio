import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  -o-transition: transform 0.3s ease-in-out;
  -moz-transition: transform 0.3s ease-in-out;
  -webkit-transition: transform 0.3s ease-in-out;
  a {
    color: black;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    -o-transition: color 0.3s linear;
    -moz-transition: color 0.3s linear;
    -webkit-transition: color 0.3s linear;
  }
  li {
    padding: 1rem 0;
  }
`;