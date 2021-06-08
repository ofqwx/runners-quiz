import React from "react";
import { Button } from "../../atoms";
import { Flex, Box } from "../../grid";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import images from "../../assets/images";

const Wrapper = styled.div`
  height: 93vh;
  background-image: url(${images.background_start_screen});
  background-image: linear-gradient(to bottom, transparent 70%, #fff),
    url(${images.background_start_screen});
  background-repeat: repeat-x;
  background-size: auto max(78%, 440px);
  background-position: min(28%, -49px) 100%;
  background-color: rgb(247, 247, 247);

  p {
    color: rgb(144, 144, 144);
    font-weight: 800;
    font-size: 0.83em;
  }
`;

export default function Home(): JSX.Element {
  const history = useHistory();

  return (
    <Wrapper>
      <Flex direction="column">
        <Box>
          <h1>Take the quiz and try your first pair!</h1>
        </Box>

        <Box width="40%">
          <Button.Primary onClick={() => history.push("/quiz")}>
            Try On Trial
          </Button.Primary>
        </Box>

        <Box>
          <p>30 days risk free</p>
        </Box>
      </Flex>
    </Wrapper>
  );
}
