import { useContext } from "react";
import { QuizDataContext } from "../data";
import { TQuestion } from "../types";

export default function useQuestions(id?: number): TQuestion[] {
  const { quizState } = useContext(QuizDataContext);

  if (id) {
    const question = quizState.questions.find((q) => q.id === id) || {};

    return [question];
  }

  return quizState?.questions || [];
}
