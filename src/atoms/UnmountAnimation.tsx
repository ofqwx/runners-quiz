import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type TUnmountAnimationProps = {
  children: ReactNode;
};

export default function UnmountAnimation({
  children,
}: TUnmountAnimationProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  );
}
