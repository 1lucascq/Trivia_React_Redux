import { combineReducers } from 'redux';
import login from './loginReducer';
import tokenReducer from './tokenReducer';
import gameData from './gameDataReducer';
import configReducer from './configReducer';

const rootReducer = combineReducers({ login, tokenReducer, gameData, configReducer });

export default rootReducer;
