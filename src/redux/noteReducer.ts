import { NoteType } from '../types/types';
import noteData from '../data/noteData.json';
import { v1 } from 'uuid';

const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
const CHANGE_NOTE_TITLE = 'CHANGE_NOTE_TITLE';

const initialState = [
  { id: v1(), name: 'Title', tag: '#tag', noteText: 'Enter same text' },
  { id: v1(), name: 'Title', tag: '#tag', noteText: 'Enter same text2' },
];

// const initialState = noteData.map((note) => {
//   return {
//     ...note,
//     id: v1(),
//   };
// });

export type ActionsType = addNewNoteType | changeTitleType;
export function notesReducer(state: Array<NoteType> = initialState, action: ActionsType) {
  switch (action.type) {
    case ADD_NEW_NOTE: {
      const newNotes = [
        ...state,
        { id: v1(), name: action.payload.title, tag: '#tag', noteText: 'Enter some text' },
      ];
      return newNotes;
    }
    case CHANGE_NOTE_TITLE: {
      const newNotes = state.map((note) =>
        note.id === action.payload.noteId ? { ...note, name: action.payload.newValue } : note,
      );
      return [...newNotes];
    }
    default:
      return state;
  }
}

// actionCreators
export const addNote = (title: string) => {
  return {
    type: ADD_NEW_NOTE,
    payload: {
      title,
    },
  } as const;
};
export type addNewNoteType = ReturnType<typeof addNote>;

export const changeTitle = (newValue: string, noteId: string) => {
  return {
    type: CHANGE_NOTE_TITLE,
    payload: {
      newValue,
      noteId,
    },
  } as const;
};
export type changeTitleType = ReturnType<typeof changeTitle>;
