import styled from "styled-components";
import { Grid1By2 } from "../styles-utilities";
import { heading } from "../styles.typograhphy";

export const SkillsWrapper = styled.section`
  background: #000;
  padding: 2rem 3rem;
  border-top: 1px solid #474747;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 40%;
    right: 40%;
    box-shadow: 0 0 50rem 10rem #6200f5;
  }
`;

export const SkillsGridWrapper = styled.div`
  display: grid;
  gap: 4rem;
  justify-items: center;
  align-items: center;
  max-width: 1700px;
  margin: 10rem auto;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsHeading = styled.h2`
  text-align: center;
  ${heading}
  margin: 8rem 0;
  font-size: 4rem;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 6rem;
    margin: 10rem 0 15rem;
  }
`;

export const SkillsBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 40rem;
`;
