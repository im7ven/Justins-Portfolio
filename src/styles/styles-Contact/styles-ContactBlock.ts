import styled from "styled-components";
import { heading, highlightText } from "../styles.typograhphy";

export const ContactWrapper = styled.section`
  border-top: 1px solid #474747;
  position: relative;
  padding: 0 3rem;
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
export const ContactGridWrapper = styled.section`
  display: grid;
  gap: 4rem;
  justify-items: center;
  align-items: center;
  max-width: 1700px;
  margin: 10rem auto;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  margin: 10rem auto;
`;

export const ContactHeading = styled.h2`
  ${heading}
  font-size:4rem;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: 11rem 0;
  letter-spacing: 0.4rem;
  @media screen and (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const DescriptionHeading = styled.h3`
  ${highlightText}
  font-size:2.4rem;
  margin: 0;
  align-self: center;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeadingIconFlex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ContactDescription = styled.p`
  color: #fff;
  font-size: 1.6rem;
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: 2.3rem;
  }
`;
