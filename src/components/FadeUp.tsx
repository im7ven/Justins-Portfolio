import { easeIn, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FadeUp = ({ children }: Props) => {
  return (
    <div
      style={{ overflow: "hidden", position: "relative", padding: "0 .5rem" }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeIn }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeUp;
