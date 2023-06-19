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
  font-size:2rem;
`;

export const ProjectDescription = styled.p`
  color: #fff;
  font-size: 1.8rem;
  max-width: 45rem;
  display: inline;
`;

export const ExpandBtn = styled.button`
  border: 0;
  outline: 0;
  ${highlightText}
  text-transform: uppercase;
  font-weight: 700;
  background: 0;
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
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(98, 0, 245, 1) 61%
  );
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
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
