import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 3rem 5rem;
  background-color: #111;
`;

export const NavIconWrapper = styled.div`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  opacity: 0;
  max-height: 0;

  transition: max-height 0.3s ease-out, opacity 0.1s ease-in;

  &.visible {
    padding: 3rem 0;
    opacity: 1;
    max-height: 200px;
  }

  @media screen and (min-width: 768px) {
    opacity: 1;
    max-height: 50px;
    gap: 5rem;
    display: flex;
    width: initial;
    padding: 0;
  }
`;

export const NavListItems = styled.li`
  color: #cecece;
  padding: 1rem 0;
  font-size: 2.4rem;
  cursor: pointer;
  border-bottom: 2px solid white;
  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    border: 0;
    &:hover {
      color: #fff;
      transform: scale(1.2);
    }
  }
`;
