import { combineReducers } from 'redux';

import { notesReducer } from './noteReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  notes: notesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type AppRootStateType = ReturnType<typeof rootReducer>;
