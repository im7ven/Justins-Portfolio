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

export const NavBar = () => {
  const [isNavListVisible, setNavListVisibility] = useState(false);

  const handleIconVisibility = () => {
    setNavListVisibility(!isNavListVisible);
  };

  return (
    <Nav>
      <NavTitle>JA</NavTitle>
      <NavIconWrapper onClick={handleIconVisibility}>
        <CgMenuBoxed
          color={isNavListVisible ? "#cecece" : "gray"}
          size="60px"
        />
      </NavIconWrapper>

      <NavList className={isNavListVisible ? "visible" : ""}>
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
