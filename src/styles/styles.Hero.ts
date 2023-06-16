import styled from "styled-components";
import { Grid1By2, containerCenter, containerLg } from "./styles-utilities";
import { h1, heading, highlightText } from "./styles.typograhphy";

export const HeroWrapper = styled.section`
  ${Grid1By2}
  ${containerLg}
${containerCenter}
min-height:100vh
`;

export const H1 = styled.h1`
  ${h1}
  ${heading}
`;

export const Highlight = styled.span`
  ${highlightText}
`;

export const Avatar = styled.img`
  border-radius: 50%;
  grid-row: 1;
  max-width: 30rem;
  box-shadow: 0 20px 10px 0 #000;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    max-width: 100%;
  }
`;

export const Separator = styled.hr`
  width: 90%;
`;

export const HeroIconWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  margin-top: 2rem;
`;
