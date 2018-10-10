import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { redrawMiddleware } from 'mithril-redux';
import rootReducer from './reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer  = composeWithDevTools(
    ...storeEnhancers
  );

  const store = createStore(
    rootReducer,
    preloadedState,
    redrawMiddleware,
    composedEnhancer
  )

  return store; 
}