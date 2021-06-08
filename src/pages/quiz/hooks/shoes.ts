import { useContext } from "react";
import { QuizDataContext } from "../components";
import { TShoe } from "../types";

export default function useShoes(): TShoe[] {
  const { quizState } = useContext(QuizDataContext);

  return quizState?.shoes || [];
}
