import data from "../data/quiz_data.json";
import dataReducer from "../pages/quiz/reducers/dataReducer";

const initialState = {
  ...data,
  currentQuestion: 0,
  showResults: false,
};

test("nextQuestion", () => {
  const nextQuestionAction = {
    type: "nextQuestion",
    payload: {
      nextQuestion: 2,
      ratingIncrease: {
        cloud: 5,
        cloudx: 4,
        cloudflow: 5,
        cloudventure: 1,
        cloudsurfer: 3,
        cloudventure_waterproof: 4,
        cloudventure_peak: 1,
        cloudflyer: 3,
      },
    },
  };

  const nextQuestionState = dataReducer(initialState, nextQuestionAction);

  expect(nextQuestionState.currentQuestion).toEqual(
    nextQuestionAction.payload.nextQuestion
  );
});

test("shoe rating", () => {
  const action1 = {
    type: "nextQuestion",
    payload: {
      nextQuestion: 2,
      ratingIncrease: {
        cloud: 5,
        cloudx: 4,
        cloudflow: 5,
        cloudventure: 1,
        cloudsurfer: 3,
        cloudventure_waterproof: 4,
        cloudventure_peak: 1,
        cloudflyer: 3,
      },
    },
  };

  const action1State = dataReducer(initialState, action1);

  for (const key in action1.payload.ratingIncrease) {
    const currentRating = initialState.shoes.find((s) => s.id === key).rating;
    const newRating = action1State.shoes.find((s) => s.id === key).rating;

    expect(newRating === currentRating + action1.payload.ratingIncrease);
  }

  const action2 = {
    type: "nextQuestion",
    payload: {
      nextQuestion: 4,
      ratingIncrease: {
        cloud: 2,
        cloudx: 4,
        cloudflow: 2,
        cloudventure: 1,
        cloudsurfer: 3,
        cloudventure_waterproof: 3,
        cloudventure_peak: 1,
        cloudflyer: 3,
      },
    },
  };

  const action2State = dataReducer(action1State, action1);

  for (const key in action2.payload.ratingIncrease) {
    const currentRating = action1State.shoes.find((s) => s.id === key).rating;
    const newRating = action2State.shoes.find((s) => s.id === key).rating;

    expect(newRating === currentRating + action2.payload.ratingIncrease);
  }
});

test("reset", () => {
  const nextQuestionAction = {
    type: "nextQuestion",
    payload: {
      nextQuestion: 2,
      ratingIncrease: {
        cloud: 5,
        cloudx: 4,
        cloudflow: 5,
        cloudventure: 1,
        cloudsurfer: 3,
        cloudventure_waterproof: 4,
        cloudventure_peak: 1,
        cloudflyer: 3,
      },
    },
  };

  const nextQuestionState = dataReducer(initialState, nextQuestionAction);

  const resetAction = { type: "reset" };
  const resetState = dataReducer(nextQuestionState, resetAction);

  expect(resetState.currentQuestion).toEqual(0);
  expect(resetState.showResults).toEqual(false);
  expect(resetState.shoes.every((shoe) => shoe.rating === 0));
});

test("unknown action", () => {
  const nextQuestionAction = {
    type: "unknown action",
  };

  const nextQuestionState = dataReducer(initialState, nextQuestionAction);

  expect(nextQuestionState).toEqual(initialState);
});
