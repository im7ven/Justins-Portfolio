import { css } from "styled-components";

export const Grid1By2 = css`
  display: grid;
  gap: 4rem;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Grid1By3 = css`
  display: grid;
  gap: 4rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const container = css`
  max-width: 1100px;
`;

export const containerLg = css`
  max-width: 1300px;
`;

export const containerCenter = css`
  margin-right: auto;
  margin-left: auto;
`;
