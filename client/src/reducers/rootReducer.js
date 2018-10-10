import { combineReducers } from 'redux';
import appReducer from '../features/App/appReducer';

const rootReducer = combineReducers({
  test: appReducer,
});

export default rootReducer;