import { useState } from "react";
import {
  Nav,
  NavIconWrapper,
  NavLinks,
  NavList,
  NavListItems,
  NavTitle,
} from "../styles/styles-NavBar";
import { CgMenuBoxed } from "react-icons/cg";
import { easeIn } from "framer-motion";

export const NavBar = () => {
  const [isNavListVisible, setNavListVisibility] = useState(false);

  const handleIconVisibility = () => {
    setNavListVisibility(!isNavListVisible);
  };

  return (
    <Nav>
      <NavTitle
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: easeIn,
        }}
      >
        JA
      </NavTitle>
      <NavIconWrapper
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: easeIn,
        }}
        onClick={handleIconVisibility}
      >
        <CgMenuBoxed
          color={isNavListVisible ? "#fff" : "#cecece"}
          size="45px"
        />
      </NavIconWrapper>

      <NavList
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: easeIn,
        }}
        className={isNavListVisible ? "visible" : ""}
      >
        <NavListItems>
          <NavLinks href="#projects">Projects</NavLinks>
        </NavListItems>
        <NavListItems>
          <NavLinks href="#skills">Skills</NavLinks>
        </NavListItems>
        <NavListItems>
          <NavLinks href="#contact">Contact</NavLinks>
        </NavListItems>
      </NavList>
    </Nav>
  );
};
