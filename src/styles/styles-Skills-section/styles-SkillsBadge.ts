import { motion } from "framer-motion";
import styled from "styled-components";

export const BadgeWrapper = styled(motion.div)`
  border-radius: 20px;
  color: white;
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;
  align-items: center;
  text-transform: uppercase;
`;
