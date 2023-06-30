import styled from "styled-components";
import { highlightText } from "./styles.typography";

export const FooterWrapper = styled.footer`
  padding: 0.5rem 1.5rem;
  background: #191919;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterTitle = styled.h2`
  ${highlightText}
  font-size:4rem;
  display: inline;
`;

export const FooterIconWrapper = styled.div`
  align-self: center;
  display: flex;
  gap: 0.8rem;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #cecece;
`;

export const Author = styled.p`
  color: #cecece;
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
