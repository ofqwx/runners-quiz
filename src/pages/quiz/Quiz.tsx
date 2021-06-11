import React, { useContext } from "react";
import { Question } from "./components";
import { QuizDataContext } from "../../data";
import { UnmountAnimation } from "../../atoms";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export const QuestionnaireWrapper = styled.div`
  height: 100%;
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
    return <Redirect to="/result" />;
  }

  return (
    <UnmountAnimation>
      <QuestionnaireWrapper>
        <Question id={quizState.currentQuestion} />
      </QuestionnaireWrapper>
    </UnmountAnimation>
  );
}

export default function WithContext(): JSX.Element {
  return <Quiz />;
}
