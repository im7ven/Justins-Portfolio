import styled from "styled-components";
import { Grid1By2 } from "../styles-utilities";
import { heading, highlightText } from "../styles.typograhphy";

export const ProjectWrapper = styled.section`
  padding: 4rem 0 10rem;
  background: #000;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #474747;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40%;
    right: 40%;
    box-shadow: 0 0 50rem 10rem #6200f5;
  }
`;

export const ProjectGridWrapper = styled.div`
  ${Grid1By2}
  max-width: 1600px;
  position: relative;
  padding: 0 3rem;
  margin: 0 auto;
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  transition: all 0.6s;
`;

export const ProjectSectionHeading = styled.h2`
  text-align: center;
  font-size: 4rem;
  position: relative;
  ${heading}
  text-transform:uppercase;
  margin: 8rem 0;

  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const ExpandProjectsBtn = styled.div`
  text-align: center;
  font-size: 3rem;
  ${highlightText}
  background:0;
  outline: 0;
  border: 0;
  cursor: pointer;
  margin-top: 8rem;
`;
