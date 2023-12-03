import styled from "styled-components";
import { Grid1By2, containerCenter, containerLg } from "./styles-utilities";
import { h1, heading, highlightText } from "./styles.typography";
import { motion } from "framer-motion";

export const HeroWrapper = styled.section`
  ${Grid1By2}
  ${containerLg}
  ${containerCenter}
  padding:0 2rem;
  min-height: 100vh;
  margin-bottom: 6rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30%;
    right: 30%;
    box-shadow: 0 0 50rem 8rem #6200f5;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const Highlight = styled.p`
  ${heading}
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

export const H1 = styled.h1`
  ${h1}
  ${heading}
`;

export const Title = styled.h2`
  ${highlightText}
  ${h1}
`;

export const Avatar = styled(motion.img)`
  border-radius: 50%;
  grid-row: 1;
  max-width: 30rem;
  box-shadow: 0 10px 5px 0 #b2b2b2;
  max-width: 100%;
  padding: 0 0.5rem;

  @media screen and (min-width: 500px) {
    max-width: 40rem;
  }
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

export const AvatarAboutWrapper = styled(motion.div)`
  display: grid;
  justify-items: center;
  grid-template-rows: 100%;
  grid-row: 1;

  @media screen and (min-width: 768px) {
    grid-column: 2;
  }
`;

export const AvatarWrapper = styled.div`
  grid-area: 1/2;
  align-self: center;
  transition: opacity 0.2s ease-in;
`;

export const AboutWrapper = styled.div`
  color: #fff;
  line-height: 1.6;
  font-size: 1.6rem;
  transition: opacity 0.5s;
  grid-area: 1/2;
  z-index: 1;

  @media screen and (min-width: 500px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1100px) {
    font-size: 2.3rem;
  }
`;

export const AboutHeading = styled.h3`
  ${highlightText}
`;

export const AboutBtn = styled.button`
  grid-area: 2/2;
  outline: 0;
  border: 0;
  background: #6200f5;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 3rem;
  border-radius: 5px;
  align-self: center;
  transition: 0.4s;
  cursor: pointer;

  @media screen and (min-width: 339px) {
    padding: 2rem 3rem;
  }

  &:hover {
    scale: 1.1;
  }
`;

export const ExpandAboutBtn = styled.button`
  outline: 0;
  border: 0;
  color: #fff;
  background: #6200f5;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
`;
