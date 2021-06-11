import React, { ReactNode } from "react";
import { Flex, Box } from "../grid";
import { NavBar } from "../molecules";
import styled, { createGlobalStyle } from "styled-components";

type TDefaultLayoutProps = {
  children: ReactNode;
};

const Wrapper = styled.div`
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%
  }
  h1, button {
    font-family: Montserrat;
  }
`;

export default function DefaultLayout({
  children,
}: TDefaultLayoutProps): JSX.Element {
  return (
    <Wrapper>
      <GlobalStyle />
      <Flex direction="column">
        <Box padding="0">
          <NavBar />
        </Box>

        <Box padding="0" height="100%" margin={{top: '60px'}}>{children}</Box>
      </Flex>
    </Wrapper>
  );
}
