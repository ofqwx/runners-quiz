import { TQuizState } from "../types";

type TActionType = "nextQuestion" | "reset";

type TPayload = {
  ratingIncrease: {
    [key: string]: number;
  };
  nextQuestion: number;
};

type TDataAction = {
  type: TActionType;
  payload?: TPayload;
};

export default function dataReducer(
  state: TQuizState,
  action: TDataAction
): TQuizState {
  switch (action.type) {
    case "nextQuestion":
      return {
        ...state,
        shoes: state.shoes.map((currentShoe) => {
          const increaseValue =
            action?.payload?.ratingIncrease[currentShoe.id] || 0;

          if (increaseValue > 0) {
            return {
              ...currentShoe,
              rating: Number(currentShoe.rating) + Number(increaseValue),
            };
          }

          return currentShoe;
        }),
        currentQuestion: action.payload?.nextQuestion || 0,
        showResults: !action.payload?.nextQuestion || false
      };
    case "reset":
      return {
        ...state,
        shoes: state.shoes.map((currentShoe) => ({
          ...currentShoe,
          rating: 0
        })),
        currentQuestion: 0,
        showResults: false,
      };
    default:
      return state;
  }
}
