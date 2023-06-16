import { useState } from "react";
import {
  Nav,
  NavIconWrapper,
  NavList,
  NavListItems,
} from "../styles/styles-NavBar";
import { CgMenuBoxed } from "react-icons/cg";

export const NavBar = () => {
  const [isNavListVisible, setNavListVisibility] = useState(false);

  const handleIconVisibility = () => {
    setNavListVisibility(!isNavListVisible);
  };

  return (
    <Nav>
      <NavIconWrapper onClick={handleIconVisibility}>
        {
          <CgMenuBoxed
            color={isNavListVisible ? "#cecece" : "gray"}
            size="60px"
          />
        }
      </NavIconWrapper>

      <NavList className={isNavListVisible ? "visible" : ""}>
        <NavListItems>Projects</NavListItems>
        <NavListItems>About</NavListItems>
        <NavListItems>Contact</NavListItems>
      </NavList>
    </Nav>
  );
};
