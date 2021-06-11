import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type TMargin =
  | string
  | {
      [key: string]: string;
    };

function marginHelper(margin: TMargin): string {
  if (typeof margin === "string") {
    return margin;
  }

  const marginStyle = Object.keys(margin).map(
    (key) => `margin-${key}: ${margin[key]}`
  );

  return marginStyle.join(";");
}

const Wrapper = styled.div`
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  padding: ${(props) => props.padding || "8px"};

  ${(props) => {
    if (props.margin)
      return css`
        ${marginHelper(props.margin)};
      `;
  }}

  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-grow: ${(props) => (props.flexGrow !== undefined ? props.flexGrow : 0)};
  flex-shrink: ${(props) =>
    props.flexShrink !== undefined ? props.flexShrink : 1};
  align-self: ${(props) => props.alignSelf || "stretch"};

  overflow: ${(props) => (props.scroll ? "scroll" : null)};

  /* Prevent margin collapsing of Flex containers */
  ::before,
  ::after {
    content: " ";
    display: table;
  }
`;

type TBoxProps = {
  children: ReactNode;
  height?: string;
  width?: string;
  margin?: TMargin;
  padding?: string | number;
  flexBasis?: string;
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?: string;
  scroll?: boolean;
  className?: string;
};

export default function Box({
  children,
  height,
  width,
  margin,
  padding,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  scroll,
  className,
}: TBoxProps): JSX.Element {
  return (
    <Wrapper
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignSelf={alignSelf}
      scroll={scroll}
      className={className}
    >
      {children}
    </Wrapper>
  );
}
