import { combineReducers } from 'redux';
import { notesReducer } from './noteReducer';
import { tagsReducer } from './tagsReduser';

export const rootReducer = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
