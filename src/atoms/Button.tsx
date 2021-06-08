import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const Button = styled.button`
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

export default {
  /* eslint-disable */
  Primary: ({ children, ...props }) => (
    <Button type="primary" {...props}>
      {children}
    </Button>
  ),
  Secondary: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  Link: ({ children, ...props }) =>
    props.href ? (
      <a href={props.href}>
        <Button type="link">{children}</Button>
      </a>
    ) : (
      <Link to={props.to}>
        <Button type="link">{children}</Button>
      </Link>
    ),
  Icon: ({ children, onClick, ...props }) => (
    <Button type="icon" onClick={onClick}>
      <IconContext.Provider value={{ ...props }}>
        {children}
      </IconContext.Provider>
    </Button>
  ),
};
