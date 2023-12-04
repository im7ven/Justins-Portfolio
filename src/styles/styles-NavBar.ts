import { motion } from "framer-motion";
import styled from "styled-components";
import { highlightText } from "./styles.typography";

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.8rem;
  position: relative;
  background: #000;
  z-index: 44;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 3rem;
  }
`;

export const Logo = styled(motion.img)`
  ${highlightText}
  width: 6rem;
  margin-right: auto;
`;

export const NavIconWrapper = styled(motion.div)`
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.1s ease-in;

  &.visible {
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
  text-align: center;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s;
  background: #030303;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    background: 0;
    margin: 0;
    border: 0;
    &:hover {
      color: #fff;
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
