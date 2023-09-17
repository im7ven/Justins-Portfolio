import { motion } from "framer-motion";
import styled from "styled-components";

export const PreloaderName = styled(motion.p)`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

export const PreloaderTitle = styled(motion.p)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #e4ba00;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;
