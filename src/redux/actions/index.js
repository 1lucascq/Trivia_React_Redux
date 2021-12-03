import getFetchURL from '../../helpers/getFetchURL';
import shuffle from '../../helpers/shuffleArray';

export const LOGIN = 'LOGIN';
export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_FAILED = 'FETCH_API_FAILED';
export const LOADING = 'LOADING';
export const PLAYER = 'PLAYER';
export const RESET_STATE = 'RESET_STATE';
export const RESET_PLAYER = 'RESET_PLAYER';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';

export const resetState = () => ({
  type: RESET_STATE,
});

export const resetGameData = () => ({
  type: RESET_PLAYER,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const token = (payload) => ({
  type: FETCH_TOKEN,
  payload,
});

export const successAPIFetch = (payload) => ({
  type: FETCH_API_SUCCESS,
  payload,
});

export const failedAPIFetch = (payload) => ({
  type: FETCH_API_FAILED,
  payload,
});

export const loading = (payload) => ({
  type: LOADING,
  payload,
});

export const player = (payload) => ({
  type: PLAYER,
  payload,
});

export const fetchCategoriesAction = (payload) => ({
  type: FETCH_CATEGORIES,
  payload,
});

export const configOptions = (payload) => ({
  type: CONFIG_OPTIONS,
  payload,
});

export const fetchToken = () => async (dispatch) => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return dispatch(token(data));
};

export const fetchAPI = (tokenKey, config) => async (dispatch) => {
  dispatch(loading(true));
  try {
    const questionsResponse = await fetch(getFetchURL(tokenKey, config));
    const data = await questionsResponse.json();
    const updatedData = data.results.map((question) => {
      const allAnswers = [...question.incorrect_answers, question.correct_answer];
      const shuffledAnswers = shuffle(allAnswers).map((answer, id) => {
        if (answer === question.correct_answer) {
          return { name: answer, id, correct: true };
        }

        return { name: answer, id, correct: false };
      });

      const updatedItem = { ...question, shuffledAnswers };
      return updatedItem;
    });
    dispatch(successAPIFetch(updatedData));
  } catch (error) {
    dispatch(failedAPIFetch(error));
  }
};

export const fetchCategories = () => async (dispatch) => {
  const categories = await fetch('https://opentdb.com/api_category.php');
  const response = await categories.json();
  return dispatch(fetchCategoriesAction(response));
};
