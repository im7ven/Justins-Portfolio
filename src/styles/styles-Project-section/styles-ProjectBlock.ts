import styled from "styled-components";
import { Grid1By2 } from "../styles-utilities";
import { highlightText } from "../styles.typograhphy";

export const ProjectWrapper = styled.section`
  padding: 4rem 6rem;
  background: #000;
`;

export const ProjectGridWrapper = styled.div`
  ${Grid1By2}
  max-width: 1600px;
  margin: 0 auto;
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  transition: all 0.6s;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
  color: #e4ba00;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 5.5rem;
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
  margin-top: 3rem;
`;
