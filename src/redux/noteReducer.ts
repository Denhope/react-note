import { NoteType } from '../types/types';
import noteData from '../data/noteData.json';
import { v1 } from 'uuid';

const ADD_NEW_NOTE = 'ADD_NEW_NOTE';

// const initialState = ((note) => {
//   return {
//     ...note,
//     id: '',
//   };
// });

const initialState = {
  id: 'string',
  name: 'string',
  tag: 'string',
  noteText: 'string',
};

export type ActionsType = addNewNoteType;
export function notesReducer(state = initialState, action: ActionsType) {
  switch (action.type) {
    case ADD_NEW_NOTE: {
      const newNotes = {
        ...state,
        id: v1(),
        name: action.payload.title,
        tag: '#',
        noteText: 'Enter some text',
      };
      return newNotes;
    }
    default:
      return state;
  }
}

// actionCreator
export const addNote = (title: string) => {
  return {
    type: ADD_NEW_NOTE,
    payload: {
      title,
    },
  } as const;
};
export type addNewNoteType = ReturnType<typeof addNote>;
