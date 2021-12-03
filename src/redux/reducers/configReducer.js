import { CONFIG_OPTIONS, FETCH_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  categories: [],
  configOptions: {
    category: '',
    difficulty: '',
    type: '',
  },
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CATEGORIES:
    return {
      ...state,
      categories: action.payload.trivia_categories,
    };

  case CONFIG_OPTIONS:
    return {
      ...state,
      configOptions: action.payload,
    };
  default:
    return state;
  }
};

export default configReducer;
