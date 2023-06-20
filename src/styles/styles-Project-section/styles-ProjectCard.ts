import styled from "styled-components";

import { highlightText } from "../styles.typograhphy";

export const ProjectCardWrapper = styled.article`
  border: 10px solid #232323;
  background: #232323;
  border-radius: 30px;
  overflow: hidden;
`;

export const H2 = styled.h2`
  ${highlightText}
  font-size:2.2rem;

  @media screen and (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const ProjectDescription = styled.p`
  color: #fff;
  font-size: 1.8rem;
  max-width: 45rem;
  display: inline;

  @media screen and (min-width: 1350px) {
    font-size: 2rem;
  }
`;

export const ExpandBtn = styled.button`
  border: 0;
  outline: 0;
  ${highlightText}
  text-transform: uppercase;
  font-weight: 700;
  background: 0;
  font-size: 1.6rem;
`;

export const ProjectBtnWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 4rem;
`;
export const ProjectBtn = styled.button`
  border-radius: 30px;
  color: #fff;
  padding: 1rem 4rem;
  border: 0;
  outline: 0;
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 700;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(98, 0, 245, 1) 61%
  );

  @media screen and (min-width: 1300px) {
    padding: 1rem 4rem;
    font-size: 1.8rem;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
`;

export const ProjectInfo = styled.div`
  padding: 0 2rem 2rem;
`;

export const HeadingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
