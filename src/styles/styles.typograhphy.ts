import { css } from "styled-components";

export const heading = css`
  color: #fff;
`;

export const text = css`
  color: #232323;
`;

export const highlightText = css`
  color: #e4ba00;
`;

export const h1 = css`
  font-size: 4rem;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 7rem;
  }
`;
