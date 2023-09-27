import styled from "styled-components";
import { highlightText } from "./styles.typography";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.8rem;

  @media screen and (min-width: 768px) {
    padding: 2.5rem 5rem;
  }
`;

export const NavTitle = styled.h2`
  ${highlightText}
  font-size: 5.5rem;
  margin: 0;
  font-family: "Gotu", sans-serif;
`;

export const NavIconWrapper = styled.div`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
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
  padding: 1rem 0;
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

export const NavLinks = styled.a`
  color: #cecece;
  font-size: 2.4rem;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;
