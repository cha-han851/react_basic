import { createStore, combineReducers, compose } from 'redux';
import accountReducer from '../features/account';
import persistState from 'redux-localstorage';

const reducer = combineReducers({
  account: accountReducer,
});

const enhancer = compose(
  persistState(),
)

export const store = createStore(
  reducer,
  enhancer,
);

