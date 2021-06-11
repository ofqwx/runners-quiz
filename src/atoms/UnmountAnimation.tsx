import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type TUnmountAnimationProps = {
  children: ReactNode;
};

const StyledAnimation = styled(motion.div)`
  height: 100%;
`;

export default function UnmountAnimation({
  children,
}: TUnmountAnimationProps): JSX.Element {
  return (
    <StyledAnimation
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </StyledAnimation>
  );
}
