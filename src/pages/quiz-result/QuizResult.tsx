import React, { ReactElement, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import images from "../../assets/images";
import { Button, Image, UnmountAnimation } from "../../atoms";
import { Box, Flex } from "../../grid";
import { Card } from "../../molecules";
import { useShoes } from "../../hooks";
import { QuestionnaireWrapper } from "../quiz/Quiz";
import { TShoe } from "../../types";
import { Redirect } from "react-router-dom";
import { QuizDataContext } from "../../data";

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
  const { quizState, dispatch } = useContext(QuizDataContext);
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

    return () => {
      dispatch({ type: "reset" });
    };
  }, [dispatch, shoes]);

  // Avoid users to navigate directly to results page
  if (!quizState?.showResults) {
    return <Redirect to="home" />;
  }

  if (results.length) {
    return (
      <UnmountAnimation>
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
                        <Button.Link href={results[0].url}>
                          Shop now
                        </Button.Link>
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
      </UnmountAnimation>
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
