import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  background-color: ${(props) =>
    props.type === "primary"
      ? "#000"
      : props.type === "link"
      ? "rgb(62,100,114)"
      : "transparent"};
  color: #fff;
  padding: 20px;
  width: 100%;
  border: ${(props) =>
    props.type === "primary" || props.type === "icon"
      ? "none"
      : "1px solid #fff"};
`;

type TButtonAnimationProps = {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
};

function AnimatedButton({
  children,
  ...props
}: TButtonAnimationProps): JSX.Element {
  return (
    <Button whileTap={{ scale: 0.9 }} {...props}>
      {children}
    </Button>
  );
}

export default {
  /* eslint-disable */
  Primary: ({ children, ...props }) => (
    <AnimatedButton type="primary" {...props}>
      {children}
    </AnimatedButton>
  ),
  Secondary: ({ children, ...props }) => (
    <AnimatedButton {...props}>{children}</AnimatedButton>
  ),
  Link: ({ children, ...props }) =>
    props.href ? (
      <a href={props.href}>
        <AnimatedButton type="link">{children}</AnimatedButton>
      </a>
    ) : (
      <Link to={props.to}>
        <AnimatedButton type="link">{children}</AnimatedButton>
      </Link>
    ),
  Icon: ({ children, onClick, ...props }) => (
    <AnimatedButton type="icon" onClick={onClick}>
      <IconContext.Provider value={{ ...props }}>
        {children}
      </IconContext.Provider>
    </AnimatedButton>
  ),
};
