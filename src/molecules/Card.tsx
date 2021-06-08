import React, { ReactNode } from "react";
import styled from "styled-components";
import { Box, Flex } from "../grid";

type TCardProps = {
  content: ReactNode;
  title?: string;
  description?: string;
  footer?: ReactNode;
};

const ContentWrapper = styled.div`
  background-color: rgb(247, 247, 247);

  h3 {
    margin: 0;
  }

  p {
    color: rgb(167, 167, 167);
    font-size: 0.83em;
  }
`;

export default function Card({
  content,
  title,
  description,
  footer: Footer,
  ...props
}: TCardProps): JSX.Element {
  return (
    <Flex direction="column">
      <ContentWrapper {...props}>
        <Box>{content}</Box>

        {title ? (
          <Box>
            <h3>{title}</h3>
          </Box>
        ) : null}

        {description ? (
          <Box>
            <p>{description}</p>
          </Box>
        ) : null}
      </ContentWrapper>
      {Footer ? Footer : null}
    </Flex>
  );
}
