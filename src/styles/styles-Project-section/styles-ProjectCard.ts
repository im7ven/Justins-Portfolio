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
  font-size:2.5rem;
`;

export const ProjectDescription = styled.p`
  color: #fff;
  font-size: 1.8rem;
  max-width: 45rem;
  display: inline;
  line-height: 1.5;

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
  cursor: pointer;
`;

export const ProjectBtnWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 4rem;
`;
export const ProjectBtn = styled.button`
  border-radius: 10px;
  color: #fff;
  padding: 1rem 4rem;
  border: 0;
  outline: 0;
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 700;
  background: #6200f5;
  cursor: pointer;

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
