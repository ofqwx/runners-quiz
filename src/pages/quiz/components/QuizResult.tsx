import React, { ReactElement, useState, useEffect } from "react";
import { useShoes } from "../hooks";
import { Flex, Box } from "../../../grid";
import images from "../../../assets/images";
import { Image, Button } from "../../../atoms";
import { Card } from "../../../molecules";
import { TShoe } from "../types";
import styled from "styled-components";
import { QuestionnaireWrapper } from "../Quiz";

const ResultsWrapper = styled.div`
  height: 92.5vh;
  background-color: #fff;

  h5 {
    color: rgb(162, 162, 162);
  }
`;

function getResultsPromise(data): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
}

export default function QuizResult(): ReactElement {
  const shoes = useShoes();
  const [results, setResults] = useState<TShoe[]>([]);

  useEffect(() => {
    async function getResults(data) {
      try {
        const results = await getResultsPromise(data);
        const mostRatedShoes = results
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setResults(mostRatedShoes);
      } catch (error) {
        throw new Error(error);
      }
    }

    getResults(shoes);
  }, [shoes]);

  if (results.length) {
    return (
      <ResultsWrapper>
        <Flex direction="column">
          <Box>
            <Flex direction="column">
              <Box>
                <h1>Congratulations!</h1>
                <h5>{`Based on your selection we've decided on the ${results[0].name}!. Enjoy the 30 day trial!`}</h5>
              </Box>

              <Card
                content={
                  <Image
                    src={images[results[0].id]}
                    alt={results[0].name}
                    fit="cover"
                  />
                }
                title={results[0].name}
                description="Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed"
                footer={
                  <Flex justifyContent="center">
                    <Box width="50%">
                      <Button.Link href={results[0].url}>Shop now</Button.Link>
                    </Box>
                  </Flex>
                }
              />
            </Flex>
          </Box>

          <Box>
            <Flex direction="column">
              <Box>
                <h1>Similar Profiles</h1>
              </Box>

              {results.slice(1).map((currentShoe) => (
                <Card
                  key={currentShoe.id}
                  content={
                    <Image
                      src={images[currentShoe.id]}
                      alt={currentShoe.name}
                    />
                  }
                  title={currentShoe.name}
                  description="Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed"
                  footer={
                    <Flex justifyContent="center">
                      <Box width="50%">
                        <Button.Link href={results[0].url}>
                          Shop now
                        </Button.Link>
                      </Box>
                    </Flex>
                  }
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </ResultsWrapper>
    );
  }

  return (
    <QuestionnaireWrapper>
      <Flex direction="column" justifyContent="center">
        <Box alignSelf="center">
          <Image alt="" src={images.loader} height="auto" width="50px" />
        </Box>

        <Box alignSelf="center">
          <p>{"We're runningto get your results"}</p>
        </Box>
      </Flex>
    </QuestionnaireWrapper>
  );
}
