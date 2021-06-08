// @flow

import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  height: ${(props) => props.height ?? "100%"};
  width: ${(props) => props.width ?? "100%"};
`;

type TBackgroundPosition =
  | "bottom"
  | "center"
  | "inherit"
  | "initial"
  | "left"
  | "right"
  | "top"
  | "unset";

type TBackgroundSize =
  | "auto"
  | "contain"
  | "cover"
  | "inherit"
  | "initial"
  | "unset";

type TImageProps = {
  alt: string;
  src: string;
  position?: TBackgroundPosition;
  fit?: TBackgroundSize;
  height?: string,
  width?: string
};

export default function Image({ alt, ...props }: TImageProps): JSX.Element {
  return <Wrapper aria-label={alt} {...props} />;
}
