import React, { useContext } from "react";
import {
  Question,
  QuizDataProvider,
  QuizDataContext,
  QuizResult,
} from "./components";
import styled from "styled-components";

export const QuestionnaireWrapper = styled.div`
  height: 92.5vh;
  background-color: rgb(51, 51, 51);

  h2 {
    color: #fff;
    text-align: center;
  }

  h5 {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  p {
    color: rgb(162, 162, 162);
  }
`;

function Quiz(): JSX.Element {
  const { quizState } = useContext(QuizDataContext);

  if (quizState.showResults) {
    return <QuizResult />;
  }

  return (
    <QuestionnaireWrapper>
      <Question id={quizState.currentQuestion} />
    </QuestionnaireWrapper>
  );
}

export default function WithContext(): JSX.Element {
  return (
    <QuizDataProvider>
      <Quiz />
    </QuizDataProvider>
  );
}
