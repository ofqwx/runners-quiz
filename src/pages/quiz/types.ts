export type TQuestion = {
  id: number;
  copy: string;
  answers: TAnswer[];
};

export type TAnswer = {
  id?: number;
  copy: string;
  nextQuestion: number;
  ratingIncrease: {
    [key: string]: number;
  };
};

export type TShoe = {
  id: string;
  name: string;
  rating: number;
  url: string;
};

export type TQuizData = {
  shoes: TShoe[];
  questions: TQuestion[];
};

export type TQuizState = TQuizData & {
  currentQuestion: number;
  showResults: boolean;
};
