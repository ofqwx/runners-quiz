import React, { useContext } from "react";
import { TAnswer } from "../../../types";
import { Button } from "../../../atoms";
import { QuizDataContext } from "../../../data";

type TAnswerProps = {
  answer: TAnswer;
};

export default function Answer({
  answer,
}: TAnswerProps): JSX.Element {
  const { dispatch } = useContext(QuizDataContext);

  function handleAnswerResponse({ nextQuestion, ratingIncrease }) {
    dispatch({
      type: "nextQuestion",
      payload: { ratingIncrease, nextQuestion },
    });
  }

  return (
    <Button.Secondary onClick={() => handleAnswerResponse(answer)}>
      {answer.copy}
    </Button.Secondary>
  );
}
