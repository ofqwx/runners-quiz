import React, { createContext, ReactNode, useReducer } from "react";
import data from "../quiz_data.json";
import dataReducer from "../reducers/dataReducer";
import { TQuizState } from "../../types";

export const QuizDataContext = createContext<any>({});

type TQuizDataProviderProps = {
  children: ReactNode;
};

export default function QuizDataProvider({
  children,
}: TQuizDataProviderProps): JSX.Element {
  const [quizState, dispatch] = useReducer(dataReducer, {
    ...data,
    currentQuestion: 0,
    showResults: false
  } as TQuizState);

  return (
    <QuizDataContext.Provider value={{ quizState, dispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
}
