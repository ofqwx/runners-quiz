import React, { useContext } from "react";
import { useQuestions } from "../../../hooks";
import { Flex, Box } from "../../../grid";
import { Answer } from ".";
import { QuizDataContext } from "../../../data";
import { Button } from "../../../atoms";
import { VscDebugRestart } from "react-icons/vsc";

type TQuestionProps = {
  id: number;
};

export default function Question({ id }: TQuestionProps): JSX.Element {
  const [question] = useQuestions(id);
  const { quizState, dispatch } = useContext(QuizDataContext);

  function resetQuiz() {
    dispatch({ type: "reset" });
  }

  return (
    <Flex direction="column">
      <Box alignSelf="center">
        <h5>
          TRY ON QUIZ
          <br />
          30 DAYS RISK FREE
        </h5>
      </Box>

      <Flex direction="column" justifyContent="space-evenly" height="70%">
        <Box alignSelf="center">
          <h2>{question.copy}</h2>
        </Box>

        <Box margin="-100px 0 0 0">
          <Flex justifyContent="space-evenly">
            {question.answers.map((answer) => (
              <Box key={answer.copy}>
                <Answer answer={answer} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>

      {quizState.currentQuestion > 0 ? (
        <Box alignSelf="center">
          <Button.Icon onClick={resetQuiz} color="white" size="1.5em">
            <VscDebugRestart />
          </Button.Icon>
        </Box>
      ) : null}
    </Flex>
  );
}
