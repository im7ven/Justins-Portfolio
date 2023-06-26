import styled from "styled-components";
import { highlightText } from "../styles.typograhphy";

export const FeatureWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`;

export const FeatureIcon = styled.img`
  width: 100%;
  max-width: 6rem;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    max-width: 8rem;
  }
`;

export const FeatureHeading = styled.h2`
  ${highlightText}
  font-size:2.4rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const FeatureDescription = styled.p`
  color: #fff;
  line-height: 1.7;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
